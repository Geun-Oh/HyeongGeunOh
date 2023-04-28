import styled from 'styled-components';

import { useGlobalContext } from '../../context/reducer';

const SuccessModal = () => {
  const { clearCorrectCard, clearOpenCard, setSuccessModalOpen } = useGlobalContext();

  return (
    <StyledSuccessModal>
      <article>
        <h1>성공!!!</h1>
        <button
          type="button"
          value="게임으로 돌아가기"
          onClick={() => {
            setSuccessModalOpen();
            clearCorrectCard();
            clearOpenCard();
          }}>
          게임으로 돌아가기!
        </button>
      </article>
    </StyledSuccessModal>
  );
};

export default SuccessModal;

const StyledSuccessModal = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: #ffffff60;
  font-size: 100px;
  display: flex;
  position: fixed;
  z-index: 999;
  justify-content: center;
  align-items: center;
  article {
    width: 300px;
    height: 200px;
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.BoxShadow};
    background-color: ${({ theme }) => theme.Background};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 3rem;
      color: ${({ theme }) => theme.Text};
    }
    button {
      width: 80px;
      border: none;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
      box-shadow: ${({ theme }) => theme.BoxShadow};
      background-color: ${({ theme }) => theme.SubBackground};
      transition-duration: 0.3s;
      :hover {
        color: white;
        background-color: ${({ theme }) => theme.Text};
      }
    }
  }
`;
