import React, { useState, useEffect, useCallback } from "react";
import { Layout, Pagination, notification, Tooltip, Switch } from "antd";
import { debounce } from "lodash";
import { ClientsContainer, ClientsHeader, ClientsGrid, ClientsFooter, ClientCount, PaginationContainer, CreateClientButton, StyledSelect, SearchInput, SearchContainer, StyledTooltip, StyledSwitch } from "./styles";
import Header from "../../components/Header";
import UserCard from "../../components/UserCard";
import ClientModal from "../../components/ClientModal";
import { userService } from "../../api/userService";
import { User } from "../../types/user";
import Spinner from '../../components/Spinner';

const { Content } = Layout;
const { Option } = StyledSelect;

const Clients: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalConfig, setModalConfig] = useState<{
    type: 'create' | 'edit' | 'delete';
    visible: boolean;
    userData?: User;
  }>({ type: 'create', visible: false });
  const [modalLoading, setModalLoading] = useState(false);
  const [onlySelected, setOnlySelected] = useState(false);

  const fetchUsers = async (search?: string) => {
    try {
      setLoading(true);
      const userIds = await userService.getSelectedUsers();
      setSelectedUserIds(userIds);

      const response = await userService.getUsers({
        offset: pageSize * (currentPage - 1),
        limit: pageSize,
        ...(search ? { search } : {}),
        ...(onlySelected ? { userIds: JSON.stringify(userIds) } : {})
      });
      
      setUsers(response.data);
      setTotal(response.total);
    } catch (error) {
      console.error("Failed to fetch users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers(searchTerm);
  }, [currentPage, pageSize, searchTerm, onlySelected]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setSearchTerm(value);
      setCurrentPage(1);
    }, 500),
    []
  );

  const handleModalSubmit = async (values: any) => {
    try {
      setModalLoading(true);
      
      if (modalConfig.type === 'create') {
        await userService.createUser(values);
      } else if (modalConfig.type === 'edit' && modalConfig.userData) {
        await userService.updateUser(modalConfig.userData.id, values);
      } else if (modalConfig.type === 'delete' && modalConfig.userData) {
        await userService.deleteUser(modalConfig.userData.id);
      }

      setModalConfig({ type: 'create', visible: false });
      fetchUsers(searchTerm);
    } catch (error) {
      console.error('Operation failed:', error);
    } finally {
      setModalLoading(false);
    }
  };

  const handleToggleSelect = async (userId: string) => {
    try {
      const isSelected = selectedUserIds.includes(userId);
      
      if (isSelected) {
        await userService.removeSelectedUsers(userId);
      } else {
        await userService.selectUsers(userId);
      }

      const userIds = await userService.getSelectedUsers();
      setSelectedUserIds(userIds);
      
    } catch (error) {
      console.error('Failed to toggle user selection:', error);
    }
  };

  return (
    <ClientsContainer>
      <Header activePath="/clients"/>
      
      <Content style={{ padding: '0 120px' }}>
        <ClientsHeader>
          <ClientCount>
            <span>{total}</span> {total === 1 ? 'cliente encontrado' : 'clientes encontrados'}
          </ClientCount>

          <SearchContainer>
            <SearchInput
              placeholder="Buscar por nome"
              onChange={(e) => debouncedSearch(e.target.value)}
              allowClear
            />
            <StyledTooltip title="Apenas selecionados">
              <StyledSwitch
                checked={onlySelected}
                onChange={(checked) => {
                  setOnlySelected(checked);
                  setCurrentPage(1);
                }}
              />
            </StyledTooltip>
          </SearchContainer>
          
          <StyledSelect
            defaultValue={pageSize} 
            onChange={(value) => {
              setPageSize(Number(value));
              setCurrentPage(1);
            }}
            style={{ width: 120 }}
          >
            <Option value={5}>5 / página</Option>
            <Option value={10}>10 / página</Option>
            <Option value={20}>20 / página</Option>
            <Option value={30}>30 / página</Option>
          </StyledSelect>
        </ClientsHeader>
        
        <ClientsGrid>
          {loading ? (
            <Spinner containerStyle={{ gridColumn: '1 / -1' }} />
          ) : (
            users.map(user => (
              <UserCard 
                key={user.id}
                userId={user.id}
                name={user.name}
                ownRemuneration={user.own_remuneration}
                companyValue={user.user_companies[0]?.company_value}
                isSelected={selectedUserIds.includes(user.id)}
                onEdit={() => setModalConfig({ type: 'edit', visible: true, userData: user })}
                onDelete={() => setModalConfig({ type: 'delete', visible: true, userData: user })}
                onToggleSelect={handleToggleSelect}
              />
            ))
          )}
        </ClientsGrid>
        
        <ClientsFooter>
          <CreateClientButton 
            type="default" 
            onClick={() => setModalConfig({ type: 'create', visible: true })}
          >
            Criar Cliente
          </CreateClientButton>
          
          <PaginationContainer>
            <Pagination 
              current={currentPage}
              pageSize={pageSize}
              total={total}
              onChange={setCurrentPage}
              showSizeChanger={false}
            />
          </PaginationContainer>
        </ClientsFooter>
      </Content>

      <ClientModal
        type={modalConfig.type}
        visible={modalConfig.visible}
        onCancel={() => setModalConfig({ ...modalConfig, visible: false })}
        onSubmit={handleModalSubmit}
        loading={modalLoading}
        userData={modalConfig.userData}
      />
    </ClientsContainer>
  );
};

export default Clients; 