import BlogListingBlock from "@/components/block/blog-listing-block";
import ContainerBlock from "@/components/block/container-block";
import HeroBlock from "@/components/block/hero";

export default function BlogListingPage() {
  return (
    <>
      <HeroBlock
        eyebrow="Insights"
        heading="Make smarter decisions with Mosey Insights"
        description="<p>Get expert personal finance advice about budgeting, saving, making money, checking your credit score, paying off debt, lowering your bills and more.</p>"
        imageLayout="after"
        color="dark-blue"
      ></HeroBlock>
      <ContainerBlock columns={1} marginTop={"small"} marginBottom={"large"} gap={"small"}>
        <BlogListingBlock />
      </ContainerBlock>
    </>
  );
}
