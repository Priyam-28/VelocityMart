/* eslint-disable react/no-unescaped-entities */
const FAQ = () => {
  return (
    <div
      className="faq-section w-5/6 px-[5rem] py-[2rem] flex flex-col items-center gap-8 bg-gradient-to-b from-[#080D15] to-gray-900 overflow-y-auto"
      style={{ maxHeight: "calc(100vh - 4rem)" }}
    >
      <h1 className="text-white text-3xl font-medium">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col gap-4 w-full">
        <div className="collapse collapse-plus bg-gray-700 w-full rounded-xl">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium text-gray-100">
            I'm experiencing technical difficulties with the VelocityMart
            website. What should I do?
          </div>
          <div className="collapse-content">
            <p className="text-black font-medium text-lg">
              For VelocityMart technical support, contact
              aditya.aryan2022a@vitstudent.ac.in. They'll help with any website
              issues.
            </p>
          </div>
        </div>
        <div className="collapse  collapse-plus bg-gray-700 w-full rounded-xl">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-gray-100">
            Can I sell things on VelocityMart?
          </div>
          <div className="collapse-content">
            <p className="text-black font-medium text-lg">
              Given VelocityMart's emphasis on community-building and its
              diverse range of activities including renting, donating, and
              potential buying, it's crucial to uphold its fundamental mission.
              Selling goods may not align with the platform's overarching
              objectives, so it's wise to explore other avenues for sales if
              that's your aim.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-700 w-full rounded-xl">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-gray-100">
            How can I search for items on VelocityMart?
          </div>
          <div className="collapse-content">
            <p className="text-black font-medium text-lg">
              Users can find items on VelocityMart through random suggestions on
              the home page or by using the search and filter functionality. The
              home page presents random item suggestions for exploration, while
              the search bar and filters enable users to refine their search
              based on keywords and specific criteria, enhancing the browsing
              experience.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-700 w-full rounded-xl">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-gray-100">
            Is there a live chat feature available for immediate assistance?
          </div>
          <div className="collapse-content">
            <p className="text-black font-medium text-lg">
              No, there is no mention of a live chat feature for immediate
              assistance on VelocityMart in the provided context.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-gray-700 w-full rounded-xl">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium text-gray-100">
            How do I create an account on VelocityMart?{" "}
          </div>
          <div className="collapse-content">
            <p className="text-black font-medium text-lg">
              To register on VelocityMart, VIT students need their college
              email. Visit the site or app, click "Sign Up," and enter the
              college email. After email verification, complete your profile.
              Log in using the college email and password for secure access,
              ensuring only VIT students can use the platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
