import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { TeckStack } from "@/components/teck-stack";
import Experience from "@/components/experience";

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl space-y-24'>
        <Intro />
        <TeckStack />
        <Experience />
        <RecentProjects />
        <RecentPosts />
      </div>
    </section>
  )
}