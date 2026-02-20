'use client'

import { Container } from "@/app/components/container"
import { WorkCard } from "@/app/components/workcard"
import { IconChevronRight } from "@tabler/icons-react"

export const Works = () => {
    return <div className="flex justify-center items-center py-10">
        <Container>

            <h1 className="flex items-center gap-2 text-white font-semibold text-xl font-mono">
                <IconChevronRight />
                work
            </h1>
            <div className="pt-6 flex flex-col gap-6">
                <WorkCard companyName="Atomik Growth" Designation="Intern" Duration="Jan-25 -  present" desc1="Started as Podcasting agency, Now SF's biggest Tech media & distribution company. Currently building Cliping softwares for podcasters" desc2="Started as Podcasting agency, Now SF's biggest Tech media & distribution company. Currently building Cliping softwares for podcasters" />
                <WorkCard companyName="Atomik Growth" Designation="Intern" Duration="Jan-25 -  present" desc1="Started as Podcasting agency, Now SF's biggest Tech media & distribution company. Currently building Cliping softwares for podcasters" desc2="Started as Podcasting agency, Now SF's biggest Tech media & distribution company. Currently building Cliping softwares for podcasters" />

            </div>

        </Container>

    </div>
}