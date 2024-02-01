import ContainerBlock from "@/components/block/container-block";
import Image from "next/image";
import { TextBlock } from "@/components/block/text-block";
import BlogPostCard from "@/components/block/blog-post-block";

export default function BlogPostPage() {
  return (
    <>
      <div className="outer-padding">
        <div className="container mx-auto grid grid-cols-12">
          <Image className="col-span-12 rounded-[40px] mt-16 lg:mt-32 mb-24 lg:mb-48 mx-auto" src="/assets/blog-hero.jpg" alt="hero image" width={1920} height={1080} />
          <section className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto">
            <div className="prose max-w-[960px] prose-h2:text-[36px] prose-h2:leading-[40px] prose-h2:mb-[24px] prose-h2:mt-[48px] prose-a:text-azure prose-a:font-bold prose-a:no-underline hover:prose-a:underline focus:prose-a:underline prose-img:rounded-[40px] prose-img:p-[20px] prose-img:border-2">
              <p className="eyebrow">16 January 2024 | Life & Travel</p>
              <h1 className="mb-[24px] text-[48px]">The power of flexibility: How to balance for the future</h1>
              <p className="text-people-eater my-[24px] text-[24px]">Alex Rodriguez and Olivia Bennett</p>
              <p className="text-[30px] leading-[36px] mt-[24px] mb-20">We all know achieving a healthy balance between work and family can be challenging for working parents and carers.</p>
              <p>
                In the fast-paced world of modern professions, finding the delicate balance between work and life can often feel like walking a tightrope, especially for those who also bear the&nbsp;
                <a href="#">responsibilities of parenthood or caregiving</a>. As working professionals, the demands of our careers can sometimes clash with the equally important duties waiting for us
                at home.
              </p>
              <p>
                This blog post aims to explore effective techniques for individuals managing both a thriving career and caregiving responsibilities, offering insights tailored to those without a
                full-time stay-at-home spouse or carers of older or disabled family members.
              </p>
              <h2>1. Embrace the power of prioritization</h2>
              <p>
                In the professional realm, the art of prioritization is a crucial skill. This extends to your personal life as well. Identify your top priorities both at work and at home,
                understanding that not everything can be a top priority simultaneously. Establish clear boundaries between work and personal time, ensuring that when you are present in one area of
                your life, you are fully engaged without distractions from the other.
              </p>
              <h2>2. Efficient time management</h2>
              <p>
                Working professionals with caregiving responsibilities need to master the art of time management. Implementing time-blocking techniques can be particularly effective. Allocate specific
                time slots for work tasks, family commitments, and self-care. Adhering to a structured schedule not only enhances productivity at work but also ensures that dedicated quality time is
                given to family or caregiving responsibilities.
              </p>
              <h2>3. Seek out flexible work arrangements</h2>
              <p>
                In the digital age, many companies recognize the importance of flexible work arrangements. If feasible, explore options such as remote work, flexible hours, or compressed workweeks.
                This flexibility empowers professionals to tailor their work schedules around caregiving responsibilities, fostering a healthier work-life balance.
              </p>
              <img src="https://placekitten.com/860/585" alt="Graph" />
              <h2>4. Establish clear communication channels</h2>
              <p>
                Communication is key, both at the workplace and on the home front. Ensure open and honest communication with your employer regarding your caregiving responsibilities. Discuss realistic
                expectations and explore potential adjustments to your workload or schedule. Similarly, maintain transparent communication with your family members or caregiving team to ensure
                everyone is on the same page.
              </p>
              <h2>5. Invest in support systems</h2>
              <p>
                Building a strong support system is crucial for professionals managing dual responsibilities. This can involve hiring professional help, leaning on family and friends, or engaging in
                support networks within your community. Recognize that asking for help is a sign of strength, not weakness, and allows you to better navigate the complexities of work and caregiving.
              </p>
              <h2>6. Prioritize self-care</h2>
              <p>
                Amidst the hustle of career and caregiving, professionals often neglect their own well-being. Prioritize self-care as a non-negotiable part of your routine. Whether it's a few minutes
                of mindfulness, regular exercise, or simply taking breaks to recharge, investing in self-care is essential for maintaining resilience and balance.
              </p>
              <img src="https://placekitten.com/600/400" alt="Person Sleeping" />
              <p>
                Balancing the demands of a thriving career with caregiving responsibilities is undoubtedly challenging, but not insurmountable. By implementing these techniques – from effective
                prioritization and time management to fostering support systems and embracing imperfection – working professionals can navigate the delicate tightrope of work and life with greater
                ease. Remember, the goal is not perfection but a harmonious integration of both worlds, allowing individuals to lead fulfilling lives both in and out of the workplace.
              </p>
              <div className="col-span-12 lg:col-span-10 lg:col-start-2 mx-auto border-t-2 my-64"></div>
            </div>
          </section>
        </div>
      </div>
      <ContainerBlock columns={1} marginTop={"none"} marginBottom={"large"} gap={"none"}>
        <TextBlock center={true} overline="more picks just for you" heading="Want to keep reading?" headingSize={"medium"} />
      </ContainerBlock>
      <ContainerBlock columns={3} marginTop={"large"} marginBottom="extraLarge" gap={"large"}>
        <BlogPostCard
          blogPost={{
            title: "The power of flexibility: How to balance for the future",
            description: "We all know achieving a healthy balance between work and family can be challenging for working parents and carers.",
            category: "Life & Travel",
            image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
            url: "#",
          }}
        />
        <BlogPostCard
          blogPost={{
            title: "The power of flexibility: How to balance for the future",
            description: "We all know achieving a healthy balance between work and family can be challenging for working parents and carers.",
            category: "Life & Travel",
            image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
            url: "#",
          }}
        />
        <BlogPostCard
          blogPost={{
            title: "The power of flexibility: How to balance for the future",
            description: "We all know achieving a healthy balance between work and family can be challenging for working parents and carers.",
            category: "Life & Travel",
            image: { src: "https://placekitten.com/290/180", alt: "Kitten", width: 290, height: 180 },
            url: "#",
          }}
        />
      </ContainerBlock>
    </>
  );
}
