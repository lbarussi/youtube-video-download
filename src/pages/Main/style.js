import styled from 'styled-components';

export const Header = styled.div`
    display: flex;
    height: 60px;
    background-color: #E1E1E6;
    padding:20px;
    justify-content: space-between;
`;

export const Title = styled.div`
    align-items: center;
    display: flex;
    font-size: 18px;
    border-radius: 3px;

    svg{
        margin-right: 10px;
        color: #333;
    }

    h5{
        font-weight: 100;
        font-size: 24px;
    }
`;

export const Menu = styled.div`
    display: flex;
    p{
        &+p{
            margin-left: 15px;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    width: 100%;
`;

export const ContentMain = styled.div`
    width: 100%;
    max-width: 800px;
`;

export const Welcome = styled.div`
    h5{
        color: #f5f5f5;
        font-weight: 200;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
    }

    h1{
        font-weight: 100;
        color: white;
    }
`;

export const DownloadArea = styled.div`
    width: 100%;
    margin-top: 60px;
    display: flex;
    justify-content: center;

    input{
        height: 60px;
        width: 100%;
        font-size: 20px;
        outline: none;
        padding: 10px;
        border-radius: 5px;
    }

    button{
        margin-left: 6px;
        width: 20%;
        font-size: 18px;
        background-color: rgb(130, 87, 229);
        height: 60px;
        border: none;
        border-radius: 5px;
        color: white;
        font-weight: bold;
        transition: 0.2s background-color;

        &:hover{
            background-color: rgb(102, 67, 181);
        }

    }
`;

export const Error = styled.p`
    color: red;
`;

export const PreviewArea = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #202024;
    cursor: pointer;
    padding: 15px;
    border-radius: 5px;
`;

export const PreviewAreaImg = styled.div`
    img{
        width: 150px;
        height: 100%;
    }
`;

export const PreviewAreaDescription = styled.div`
    margin-left: 20px;
    color: #f5f5f5;
    p{
        font-size: 12px;
    }
`;

export const PreviewAreaDescriptDown = styled.div`
    display: flex;
    margin-top: 8px;

    button {
        display: flex;
        align-items: center;
        height: 30px;
        margin-right: 5px;
        padding: 10px;
        background-color: rgb(130, 87, 229);
        border: none;
        border-radius: 5px;
        color: white;
        transition: 0.2s background-color;
        &:hover{
            background-color: rgb(102, 67, 181);
        }
        span{
            margin-left: 5px
        }
    }
`;