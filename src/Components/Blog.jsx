const Blog = () => {
  return (
    <div>
      <div
        className="hero lg:h-[30vh] mb-10 rounded-xl my-10 w-11/12 lg:w-full mx-auto"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/nLxt14T/banner-6617550-1280.png)",
        }}
      >
        {/* <div className="hero-overlay h-[30vh] bg-opacity-60 rounded-xl"></div> */}
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-3xl font-bold">
              How do you find alternative product ?
            </h1>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto lg:w-full">
        <div>
          <p>
            <span className="font-bold text-lg">
              Identify Your Needs and Priorities
            </span>
            <br />
            Functionality: Determine the essential functions the product must
            have. Budget: Set a budget range you are comfortable with. Quality:
            Decide on the quality standards you need (e.g., durability, brand
            reputation). Additional Features: List any additional features that
            are desirable but not essential.
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold text-lg">Research Alternatives</span>
            <br />
            Online Reviews: Look for reviews on websites like Amazon, Consumer
            Reports, and specialized forums. Comparative Websites: Use
            comparison websites to see side-by-side evaluations of different
            products. Social Media and Forums: Join relevant groups on social
            media and forums to get user recommendations and experiences.
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold text-lg">
              Check Specifications and Features
            </span>
            <br />
            Technical Specs: Compare the technical specifications to ensure they
            meet your requirements. Features Comparison: List out features of
            the original product and see how alternatives stack up.
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold text-lg">
              Consider Brand and Manufacturer
            </span>
            <br />
            Brand Reputation: Research the brand’s reputation for quality and
            customer service. Manufacturer Policies: Look into warranty, return
            policies, and customer support options.
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold text-lg">
              Evaluate Cost-Effectiveness
            </span>
            <br />
            Initial Cost vs. Long-Term Value: Consider not just the purchase
            price but also the long-term value, including maintenance costs and
            durability. Discounts and Deals: Look for promotions, discounts, or
            bundle deals that might make an alternative more attractive.
          </p>
        </div>
        <div className="mt-5">
          <p>
            <span className="font-bold text-lg">
              User Feedback and Expert Reviews
            </span>
            <br />
            Customer Reviews: Read customer feedback on platforms like Amazon,
            Yelp, and specialized review sites. Expert Opinions: Look for expert
            reviews on tech blogs, YouTube channels, and professional review
            sites.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
