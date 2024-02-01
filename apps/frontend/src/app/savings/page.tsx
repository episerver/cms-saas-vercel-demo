"use client";

import BlogPostCard from "@/components/block/blog-post-block";
import CardBlock from "@/components/block/card-block";
import ContainerBlock from "@/components/block/container-block";
import { FormBlock } from "@/components/block/form-block";
import HeroBlock from "@/components/block/hero";
import { TextBlock } from "@/components/block/text-block";
import Carousel from "@/components/block/carousel-block";
import QuoteBlock from "@/components/block/quote-block";

export default function SavingsPage() {
  return (
    <>
      <HeroBlock
        eyebrow="Savings"
        heading="Grow your money every day with HySavings"
        description="<p>Watch your savings grow, not your worries. Always high interest rates because you deserve it. Oh, and no fees ever. Did we mention you deserve it?</p>"
        image={{ src: "https://placekitten.com/600/600", alt: "Kitten", width: 600, height: 600 }}
        imageLayout="after"
        color="blue"
        button={{ buttonType: "secondary", buttonVariant: "cta", children: "Get started" }}
      ></HeroBlock>
      <ContainerBlock columns={1} marginTop={"extraLarge"} marginBottom={"large"} gap={"small"}>
        <TextBlock overline="More than competitive" heading="4.8%* APY" headingSize={"extraLarge"} description="<p>Make your money make money.</p>" center={true}></TextBlock>
      </ContainerBlock>
      <ContainerBlock columns={1} marginTop={"medium"} marginBottom={"medium"} gap={"medium"}>
        <CardBlock
          imageLayout={"after"}
          heading={"More savings, less effort"}
          subheading={"Saving and earning made easy"}
          description={
            "<p>Mosey makes saving and earning incredibly easy. Set up direct deposit into a HySavings account. Then, watch your cash grow at a 4.8% annual percentage yield (APY). Grow faster by adding funds from any linked bank account.</p>"
          }
          image={{ src: "https://placekitten.com/650/440", alt: "Kitten", width: 650, height: 440 }}
          color={"dark-blue"}
          button={{
            buttonType: "secondary",
            buttonVariant: "cta",
            children: "Open an account",
          }}
        />
      </ContainerBlock>
      <ContainerBlock columns={1} marginTop={"medium"} marginBottom={"medium"} gap={"medium"}>
        <CardBlock
          imageLayout={"before"}
          heading={"No fees ever"}
          subheading={"Seriously no fees"}
          description={"<p>With our high-yield savings account, your money only goes down if you take it out. HySavings is fee-free forever.</p>"}
          image={{ src: "https://placekitten.com/650/440", alt: "Kitten", width: 650, height: 440 }}
          color={"white"}
          button={{
            buttonType: "secondary",
            buttonVariant: "cta",
            children: "Apply now",
          }}
        />
      </ContainerBlock>
      <ContainerBlock columns={2} marginTop={"medium"} marginBottom={"medium"} gap={"medium"}>
        <CardBlock
          imageLayout={"before"}
          icon={{
            src: "/assets/icons/shield-lock-fill.svg",
            alt: "Shield",
          }}
          heading={"Your cash is protected"}
          subheading={"Backed up by the feds"}
          description={"<p>Rest easy knowing your savings are FDIC insured, offering you the security and peace of mind you deserve.</p>"}
          color={"white"}
        />
        <CardBlock
          imageLayout={"before"}
          icon={{
            src: "/assets/icons/lock-fill.svg",
            alt: "Lock",
          }}
          heading={"Your data is too"}
          subheading={"Your money, your business"}
          description={
            "<p>Advanced fraud protection. Data-safe guarantee. Two-factor secured transactions. And our promise that Moseybank will never sell your data to third parties for marketing or advertising. We value your friendship way more than that.</p>"
          }
          color={"white"}
        />
      </ContainerBlock>
      <ContainerBlock
        columns={1}
        marginTop={"extraLarge"}
        marginBottom={"extraLarge"}
        paddingTop={"extraLarge"}
        paddingBottom={"extraLarge"}
        gap={"medium"}
        color="blue"
        backgroundImage={{ src: "/assets/starburst-bg.jpg", alt: "Starburst", width: 1920, height: 1080 }}
      >
        <TextBlock
          heading="One of a kind. Just like you."
          description="<p>Mosey makes saving and earning incredibly easy. Set up direct deposit into a HySavings account. Then, watch your cash grow at a 4.8% annual percentage yield (APY). Grow faster by adding funds from any linked bank account.</p>"
          headingSize="large"
          width={"medium"}
        />
      </ContainerBlock>

      <ContainerBlock columns={1} marginTop={"extraLarge"} marginBottom={"small"} gap={"small"}>
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

      <ContainerBlock columns={1} marginTop={"extraLarge"} marginBottom={"large"} gap={"none"}>
        <TextBlock center={true} overline="the more you know" heading="We picked out some wordy bits just for you" headingSize={"medium"} />
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
      <ContainerBlock columns={2} marginTop={"extraLarge"} paddingTop={"large"} paddingBottom={"large"} marginBottom={"none"} gap={"extraLarge"} color={"light-blue"}>
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
