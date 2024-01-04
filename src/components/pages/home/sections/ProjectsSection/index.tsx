import styled from "styled-components"
import { TitleSection } from "../../../../TitleSection"
import { FolderCardProject } from "../../../../Cards/FolderCardProject"

interface ProjectsProps {
    data: any
}

const ProjectsContainer = styled.div`
    width: 100vw;
    padding: 8vh 0;
    background-color: ${({ theme }) => theme.colors.dark.light};
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* gap: 20vh; */
    
    `

const CardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 4vw;
    padding: 8vh 0;
`
export function Projects({ data }: ProjectsProps) {

    console.log('data Projects: ', data)
    return (
        <ProjectsContainer>
            <TitleSection title="Alguns Projetos" subtitle="Projetos de desenvolvimento de aplicações..." path="/projects" />
            <CardsContainer>
                {data?.map((project, i) => {
                    console.log('ProjectsSection - project: ', project)
                    // console.log('project Title: ', project.title)
                    // console.log('project text: ', project.text)
                    // return <FolderCardProject key={i} title={project.title} text={project.text} img={project.img[0].url}/>
                    return <FolderCardProject key={i} project={project} />

                })}
                {/* <FolderCardProject title='Título' text='Text...'/>
                <FolderCardProject title='Título' text='Text...'/>
                <FolderCardProject title='Título' text='Text...'/> */}
            </CardsContainer>
        </ProjectsContainer>
    )
}