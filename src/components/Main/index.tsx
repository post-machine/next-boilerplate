import * as S from './styles';

export default function Main ({ 
    title = "Post Machine - Next Boilerplate" 
}) {
    return (
        <S.Main>
            <S.Logo>
                <img src="/imgs/post.svg" alt=""/>
            </S.Logo>
            <S.Title>{ title }</S.Title>
            <S.List>
                <h2>Features:</h2>
                <ul>
                    <li>Next JS</li>
                    <li>Typescript</li>
                    <li>Storybook</li>
                    <li>Styled Components</li>
                </ul>
            </S.List>
        </S.Main>
    )
};