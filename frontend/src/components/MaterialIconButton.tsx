import styled from 'styled-components';

interface MaterialIconButtonProps {
  icon: string;
}

const Button = styled.button`
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const MaterialIcon = styled.span`
  font-size: 3rem;
`;

const MaterialIconButton = ({ icon }: MaterialIconButtonProps) => {
  return (
    <Button>
      <MaterialIcon className="material-symbols-outlined">{icon}</MaterialIcon>
    </Button>
  );
};

export default MaterialIconButton;
