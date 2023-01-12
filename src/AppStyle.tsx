import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle: any = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  body{
    background-color:#363942;
    font-family: 'Roboto', sans-serif;
    margin:0;
    padding:0;
    -ms-overflow-style: none; 
    scrollbar-width: none;  
    ::-webkit-scrollbar {
      display: none;
    }
    * {
      box-sizing: border-box;
    }
  }
`;

export const ListWrapper: any = styled.div`
	text-align: center;
	display: flex;
	padding: 2rem 1.5rem;
	height: 100vh;
	@media only screen and (max-width: 768px) {
		padding: 1rem 1.5rem;
	}
`;

export const UserList: any = styled.div`
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	flex: 1;
	height: 100%;
	border-radius: 20px;
`;
