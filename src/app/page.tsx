import Intro from "@/components/intro";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import { TeckStack } from "@/components/teck-stack";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {

  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl'>
        <Intro />
        <TeckStack />
        <RecentProjects />
        <RecentPosts />
      </div>
    </section>
  )
}