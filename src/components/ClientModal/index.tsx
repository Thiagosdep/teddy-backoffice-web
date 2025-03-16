import React, { useEffect } from 'react';
import { Modal, Form, Input, InputNumber } from 'antd';
import { formatCurrency, parseCurrency, handleCurrencyInput } from '../../utils/currency';
import { ModalButton, ModalTitle, DeleteText } from './styles';
import { User } from '../../types/user';
import Spinner from '../Spinner';

interface ClientModalProps {
  type: 'create' | 'edit' | 'delete';
  visible: boolean;
  onCancel: () => void;
  onSubmit: (values: any) => void;
  loading: boolean;
  userData?: User;
}

const ClientModal: React.FC<ClientModalProps> = ({
  type,
  visible,
  onCancel,
  onSubmit,
  loading,
  userData
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (visible && userData) {
      form.setFieldsValue({
        ...userData,
        own_remuneration: formatCurrency(userData.own_remuneration),
        company_value: userData.user_companies?.[0]?.company_value ? 
          formatCurrency(userData.user_companies[0].company_value) : '',
        user_companies: [{
          ...userData.user_companies[0],
          company_value: formatCurrency(userData.user_companies[0]?.company_value || 0)
        }]
      });
    }
  }, [visible, userData, form]);

  useEffect(() => {
    if (!visible) {
      form.resetFields();
    }
  }, [visible, form]);

  const handleModalClose = () => {
    form.resetFields();
    onCancel();
  };

  const titles = {
    create: 'Criar Cliente',
    edit: 'Editar Cliente',
    delete: 'Excluir Cliente'
  };

  const buttonTexts = {
    create: 'Criar Cliente',
    edit: 'Salvar Alterações',
    delete: 'Excluir Cliente'
  };

  const handleSubmit = (values: any) => {
    if (!values.name || !values.email) {
      return;
    }

    if (type === 'edit') {
      const formattedValues = {
        name: values.name,
        email: values.email,
        own_remuneration: parseCurrency(values.own_remuneration),
        user_company: [{
          id: userData?.user_companies?.[0]?.id,
          name: values.user_companies?.[0]?.name,
          company_value: parseCurrency(values.company_value),
          active: userData?.user_companies?.[0]?.active ?? false
        }]
      };
      onSubmit(formattedValues);
    } else {
      const formattedValues = {
        name: values.name,
        email: values.email,
        own_remuneration: parseCurrency(values.own_remuneration),
        company_name: values.user_companies?.[0]?.name,
        company_value: parseCurrency(values.company_value)
      };
      onSubmit(formattedValues);
    }
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    form.setFieldValue(field, handleCurrencyInput(value));
  };

  if (type === 'delete') {
    return (
      <Modal
        title={<ModalTitle>{titles[type]}</ModalTitle>}
        open={visible}
        onCancel={handleModalClose}
        destroyOnClose={true}
        maskClosable={false}
        footer={[
          <ModalButton
            key="submit"
            type="primary"
            danger
            onClick={() => onSubmit(userData)}
            loading={loading}
          >
            {buttonTexts[type]}
          </ModalButton>
        ]}
      >
        {loading ? (
          <Spinner />
        ) : (
          <DeleteText>
            Você está prestes a excluir o cliente <strong>{userData?.name}</strong>
          </DeleteText>
        )}
      </Modal>
    );
  }

  return (
    <Modal
      title={<ModalTitle>{titles[type]}</ModalTitle>}
      open={visible}
      onCancel={handleModalClose}
      destroyOnClose={true}
      maskClosable={false}
      footer={null}
    >
      {loading ? (
        <Spinner />
      ) : (
        <Form
          form={form}
          preserve={false}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            ...userData,
            own_remuneration: userData?.own_remuneration ? formatCurrency(userData.own_remuneration) : '',
            company_value: userData?.user_companies?.[0]?.company_value ? 
              formatCurrency(userData.user_companies[0].company_value) : '',
            user_companies: [{
              ...userData?.user_companies?.[0],
              company_value: userData?.user_companies?.[0]?.company_value ? 
                formatCurrency(userData.user_companies[0].company_value) : ''
            }]
          }}
        >
          <Form.Item
            name="name"
            label="Nome"
            rules={[{ required: true, message: 'Por favor, insira o nome' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Por favor, insira o email' },
              { type: 'email', message: 'Email inválido' }
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="own_remuneration"
            label="Remuneração"
            rules={[{ required: true, message: 'Por favor, insira a remuneração' }]}
          >
            <Input 
              onChange={(e) => handleCurrencyChange(e, 'own_remuneration')}
            />
          </Form.Item>

          <Form.Item
            name={['user_companies', 0, 'name']}
            label="Nome da Empresa"
            rules={[{ required: true, message: 'Por favor, insira o nome da empresa' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="company_value"
            label="Valor da Empresa"
            rules={[{ required: true, message: 'Por favor, insira o valor da empresa' }]}
          >
            <Input
              onChange={(e) => handleCurrencyChange(e, 'company_value')}
            />
          </Form.Item>

          <ModalButton
            type="primary"
            htmlType="submit"
            loading={loading}
          >
            {buttonTexts[type]}
          </ModalButton>
        </Form>
      )}
    </Modal>
  );
};

export default ClientModal; 