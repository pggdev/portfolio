import { Container } from "@/app/components/container";
import { Projects } from "@/app/section/projects";
import { Skills } from "@/app/section/skills";
import { TopBio } from "@/app/section/topbio";
import { Works } from "@/app/section/works";

export default function Landing() {
    return <div >

        <TopBio />
        <Works />
        <Projects />
        <Skills />

    </div>
}