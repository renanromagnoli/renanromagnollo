import styled from "styled-components"
import Image from "next/image"
import { ReactNode } from "react"

interface CardTitleProps {
    title?: string
    img?: string
    // children: ReactNode
}

const CardTitleBox = styled.div`
    cursor: pointer;
    position: relative;
    min-width: 310px;
    max-width: 15vw;
    height: 360px;
    /* background-color: rgba(0, 0, 0, 0.8); */
    border: solid 4px;
    border-color: ${({theme}) => theme.colors.dark.dark};
    overflow: hidden;

    > img {
        z-index: -20px;
        position: absolute;
        filter: blur(1.5px);
        -webkit-filter: blur(1.5px);
    }

    
`

const ContentCard = styled.div`
    position: absolute;
    /* z-index: 50px; */
    /* width: 90%; */
    bottom: 0;
    /* justify-self: flex-end; */
    /* height: 50%; */
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    > h5 {
        /* z-index: 60px; */
        /* position: absolute; */
        background-color: rgba(0, 0, 0, 0.3);
        width: 100%;
        /* height: 100%; */
        /* z-index: 30px; */
        /* bottom: 0; */
        /* right: 0; */
        padding: 15px;
        text-align: right;
        color: ${({theme}) => theme.colors.primary.default};
        opacity: 0.9;
    }
    > p {
        margin: 10px;
        text-align: end;
    }
`

export function CardTitle({title, img='http://picsum.photos/200/600'} : CardTitleProps){
    let tit = !title ? 'Lorem ipsum dolor sit amet.' : title
    return(
        <CardTitleBox>
            <Image
                src={img}
                width={0}
                height={0}
                // fill
                alt="Image"
                loading="lazy"
                sizes="100%"
                style={{width: '100%', height:'100%', objectFit: 'cover'}}
            />
            <ContentCard>
                <h5>{tit}</h5>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. fdjakfçjdakçfjakfç jdklç fjdklaç fjdkçf jda</p>

            </ContentCard>
        </CardTitleBox>
    )
}