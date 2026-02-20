'use client'

import { Container } from "@/app/components/container"
import { ProjectCard } from "@/app/components/projectcard"
import { WorkCard } from "@/app/components/workcard"
import { IconChevronRight } from "@tabler/icons-react"

export const Projects = () => {
    return <div className="flex justify-center items-center py-10">
        <Container>

            <h1 className="flex items-center gap-2 text-white font-semibold text-xl font-mono">
                <IconChevronRight />
                Projects
            </h1>
            <div className="pt-6 flex flex-col gap-6">
                <ProjectCard
                    projectName="Project 1"
                    live={true}
                    timeline="Jan-25"
                    desc1="Started as Podcasting agency, Now SF's biggest Tech media & distribution company. Currently building Cliping softwares for podcasters" />

                <ProjectCard
                    projectName="Project 1"
                    live={false}
                    timeline="Jan-25"
                    desc1="Started as Podcasting agency, Now SF's biggest Tech media & distribution company. Currently building Cliping softwares for podcasters" />

            </div>

        </Container>

    </div>
}