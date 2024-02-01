import Header from "@/components/layout/header/_header";
import Footer from "@/components/layout/footer";
import HomeHero from "@/components/block/hero-home";
import { TextBlock } from "@/components/block/text-block";
import CardBlock from "@/components/block/card-block";
import ContainerBlock from "@/components/block/container-block";
import Carousel from "@/components/block/carousel-block";
import QuoteBlock from "@/components/block/quote-block";
import BlogPostCard from "@/components/block/blog-post-block";
import { FormBlock } from "@/components/block/form-block";

export default function Home() {
  return (
    <>
      <HomeHero
        heading="All your money in one place."
        subheading="Your cash, your choices, and a banking experience that's as unique as you are."
      />
      <ContainerBlock
        columns={1}
        marginTop={"extraLarge"}
        marginBottom={"large"}
        gap={"none"}
      >
        <TextBlock
          center={true}
          overline="banking made modern"
          heading="Send, spend and save smarter"
          description="<p>Change the way you bank.</p>"
          headingSize={"medium"}
        ></TextBlock>
      </ContainerBlock>
      <ContainerBlock
        columns={1}
        marginTop={"medium"}
        marginBottom={"medium"}
        gap={"medium"}
      >
        <CardBlock
          imageLayout="after"
          image={{
            src: "https://placekitten.com/660/400",
            alt: "Kitten",
            width: 660,
            height: 400,
          }}
          color="blue"
          heading="Saving"
          subheading="Grow your money every day"
          description="<p>Watch your savings grow, not your worries. Always high interest rates because you deserve it. Oh, and no fees ever. Did we mention you deserve it?</p>"
          button={{
            buttonType: "secondary",
            buttonVariant: "cta",
            children: "Open an account in seconds",
          }}
        ></CardBlock>
      </ContainerBlock>
      <ContainerBlock
        columns={2}
        marginTop={"medium"}
        marginBottom={"medium"}
        gap={"medium"}
      >
        <CardBlock
          imageLayout="before"
          image={{
            src: "https://placekitten.com/660/400",
            alt: "Kitten",
            width: 660,
            height: 400,
          }}
          color="green"
          heading="Checking"
          subheading="Banking without the bull"
          description="<p>No overdraft or service fees – just smooth, stress-free transactions.</p>"
          button={{
            buttonType: "secondary",
            buttonVariant: "cta",
            children: "Check it out",
          }}
        ></CardBlock>
        <CardBlock
          imageLayout="after"
          image={{
            src: "https://placekitten.com/660/400",
            alt: "Kitten",
            width: 660,
            height: 400,
          }}
          color="orange"
          heading="Credit cards"
          subheading="More points, no problem"
          description="<p>Tap without the regret. Low interest rates that won't sneak up on you – turning every buy into a win. Plus travel and life perks that you’ll wonder how you ever lived without.</p>"
          button={{
            buttonType: "secondary",
            buttonVariant: "cta",
            children: "Get approved",
          }}
        ></CardBlock>
      </ContainerBlock>
      <ContainerBlock
        columns={1}
        marginTop={"medium"}
        marginBottom={"medium"}
        gap={"medium"}
      >
        <CardBlock
          imageLayout="before"
          image={{
            src: "https://placekitten.com/660/400",
            alt: "Kitten",
            width: 660,
            height: 400,
          }}
          color="red"
          heading="Loans"
          subheading="Funds in a flash"
          description="<p>Need something now? Fast approvals and low rates – your shortcut to making your dreams happen.</p>"
          button={{
            buttonType: "secondary",
            buttonVariant: "cta",
            children: "Meet your dreams",
          }}
        ></CardBlock>
      </ContainerBlock>
      <ContainerBlock
        columns={1}
        marginTop={"extraLarge"}
        marginBottom={"small"}
        gap={"small"}
      >
        <TextBlock
          center={true}
          overline="trusted by everyone you trust"
          heading="Join 3 million+ happy people who already bank with Mosey"
          description="<p>Moseybank meets you where you are, no matter who you are.</p>"
          width="large"
          headingSize={"medium"}
        ></TextBlock>
      </ContainerBlock>
      <Carousel>
        <QuoteBlock
          user={{
            profilePicture: "https://placekitten.com/60/60",
            name: "Ellen D.",
            location: "San Bernardino, California",
          }}
          color={"white"}
          quote="Running a business is relentless. Mosey always has my back. Fast credit card approvals and low-interest rates on loans fuel my growth. When I talk to someone on the phone I feel like they actually listen to me. I'm a customer for life."
        />
        <QuoteBlock
          user={{
            profilePicture: "https://placekitten.com/60/60",
            name: "Ellen D.",
            location: "San Bernardino, California",
          }}
          color={"white"}
          quote="Running a business is relentless. Mosey always has my back. Fast credit card approvals and low-interest rates on loans fuel my growth. When I talk to someone on the phone I feel like they actually listen to me. I'm a customer for life."
        />
        <QuoteBlock
          user={{
            profilePicture: "https://placekitten.com/60/60",
            name: "Ellen D.",
            location: "San Bernardino, California",
          }}
          color={"white"}
          quote="Running a business is relentless. Mosey always has my back. Fast credit card approvals and low-interest rates on loans fuel my growth. When I talk to someone on the phone I feel like they actually listen to me. I'm a customer for life."
        />
      </Carousel>
      <ContainerBlock
        columns={1}
        marginTop={"extraLarge"}
        marginBottom={"extraLarge"}
        gap={"none"}
      >
        <CardBlock
          imageLayout="after"
          image={{
            src: "https://placekitten.com/660/400",
            alt: "Kitten",
            width: 660,
            height: 400,
          }}
          color="purple"
          heading="Mosey anywhere"
          subheading="One app to bank it all"
          description="<p>Delete all your other banking apps (jk... unless?)<br/>Mosey’s app does it all – from money matters to investing and perks. It's like we shrunk our entire bank down and shoved it in your pocket.</p><a class='inline-block mr-[12px]' href='#'><img alt='Download on the Apple App Store' src='https://placekitten.com/180/55'/></a><a class='inline-block' href='#'><img alt='Get it on Google Play' src='https://placekitten.com/180/55'/></a>"
        />
      </ContainerBlock>
      <ContainerBlock
        columns={1}
        marginTop={"extraLarge"}
        marginBottom={"large"}
        gap={"none"}
      >
        <TextBlock
          center={true}
          overline="the more you know"
          heading="We picked out some wordy bits just for you"
          headingSize={"medium"}
        />
      </ContainerBlock>
      <ContainerBlock
        columns={3}
        marginTop={"large"}
        marginBottom="extraLarge"
        gap={"large"}
      >
        <BlogPostCard
          blogPost={{
            title: "The power of flexibility: How to balance for the future",
            description:
              "We all know achieving a healthy balance between work and family can be challenging for working parents and carers.",
            category: "Life & Travel",
            author: "Marie Gruen",
            date: "January 30, 2024",
            image: {
              src: "https://placekitten.com/290/180",
              alt: "Kitten",
              width: 290,
              height: 180,
            },
            url: "#",
          }}
        />
        <BlogPostCard
          blogPost={{
            title: "The power of flexibility: How to balance for the future",
            description:
              "We all know achieving a healthy balance between work and family can be challenging for working parents and carers.",
            category: "Life & Travel",
            author: "Marie Gruen",
            date: "January 30, 2024",
            image: {
              src: "https://placekitten.com/290/180",
              alt: "Kitten",
              width: 290,
              height: 180,
            },
            url: "#",
          }}
        />
        <BlogPostCard
          blogPost={{
            title: "The power of flexibility: How to balance for the future",
            description:
              "We all know achieving a healthy balance between work and family can be challenging for working parents and carers.",
            category: "Life & Travel",
            author: "Marie Gruen",
            date: "January 30, 2024",
            image: {
              src: "https://placekitten.com/290/180",
              alt: "Kitten",
              width: 290,
              height: 180,
            },
            url: "#",
          }}
        />
      </ContainerBlock>
      <ContainerBlock
        columns={2}
        marginTop={"extraLarge"}
        paddingTop={"large"}
        paddingBottom={"large"}
        marginBottom={"none"}
        gap={"extraLarge"}
        color={"light-blue"}
      >
        <TextBlock
          center={false}
          heading="What are you waiting for?"
          description="<p>Need to schedule an appointment? Fill out this short form and we will get back to you in less than 24 hours to set up a time that works best for you. We look forward to seeing you.</p>"
          headingSize={"medium"}
        />
        <FormBlock contentId={""} paddingTop="large" paddingBottom="large" />
      </ContainerBlock>
    </>
  );
}
