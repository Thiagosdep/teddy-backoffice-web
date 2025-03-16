import React from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { formatCurrency } from "../../utils/currency";
import { 
  CardContainer, 
  CardContent, 
  UserName, 
  UserInfo, 
  CardActions, 
  ActionButton 
} from "./styles"

interface UserCardProps {
  userId: string;
  name: string;
  ownRemuneration: string | number;
  companyValue: string | number;
  isSelected?: boolean;
  onEdit?: (userId: string) => void;
  onDelete?: (userId: string) => void;
  onToggleSelect?: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({
  userId,
  name,
  ownRemuneration,
  companyValue,
  isSelected,
  onEdit,
  onDelete,
  onToggleSelect
}) => {
  const formattedRemuneration = typeof ownRemuneration === 'number' 
    ? formatCurrency(ownRemuneration)
    : ownRemuneration;

  const formattedCompanyValue = typeof companyValue === 'number'
    ? formatCurrency(companyValue)
    : companyValue;

  return (
    <CardContainer isSelected={isSelected}>
      <CardContent>
        <UserName>{name}</UserName>
        <UserInfo>
          <span>Salário: </span>
          {formattedRemuneration}
        </UserInfo>
        <UserInfo>
          <span>Empresa: </span>
          {formattedCompanyValue}
        </UserInfo>
      </CardContent>
      
      <CardActions>
        <ActionButton onClick={() => onToggleSelect?.(userId)}>
          {isSelected ? <MinusOutlined /> : <PlusOutlined />}
        </ActionButton>
        
        <ActionButton onClick={() => onEdit?.(userId)}>
          <EditOutlined />
        </ActionButton>
        
        <ActionButton danger onClick={() => onDelete?.(userId)}>
          <DeleteOutlined />
        </ActionButton>
      </CardActions>
    </CardContainer>
  );
};

export default UserCard; 