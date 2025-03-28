import schoolImg from "@/../public/school-gym-illustration.jpg";
import { Container } from "@/components/layout";

const termsAndConditionsContent = {
  lastUpdated: "March 11, 2025",
  welcome:
    'Welcome to RateThatSchool! By accessing or using our website (the "Service"), you agree to comply with and be bound by the following terms and conditions ("Terms"). Please read these Terms carefully before using our Service.',
  sections: [
    {
      title: "1. Description of Service",
      content:
        "RateThatSchool is a platform where people can rate and review their schools to provide valuable information to others in their school search. Users can submit reviews and photos anonymously or by signing in with their email for verification.",
    },
    {
      title: "2. User-Generated Content",
      content:
        "Users are solely responsible for the content they upload to RateThatSchool. All content must comply with our guidelines. Content uploaded will be reviewed before. We reserve the right to remove or modify any user-generated content at our discretion.",
    },
    {
      title: "3. Privacy",
      content:
        "RateThatSchool respects user privacy. We collect minimal personal information, such as your email address if voluntarily provided. By using the Service, you agree to our Privacy Policy.",
    },
    {
      title: "4. Content Guidelines",
      content:
        "All content uploaded to RateThatSchool must be safe for work (SFW) and not infringe on the intellectual property rights of others. Users may not upload copyrighted material without permission. By uploading any content, including images, you represent and warrant that you own the rights to the content or have explicit permission to share it.",
    },
    {
      title: "5. Copyright Infringement & DMCA Policy",
      content:
        "If you believe that any content on RateThatSchool infringes on your copyright, you may request its removal by submitting a takedown request to the owner of the website",
    },
    {
      title: "6. Liability Waiver for Third-Party Copyright Claims",
      content:
        "RateThatSchool is not responsible for any copyright claims or legal actions resulting from user-uploaded content. Users who upload infringing material assume full liability for any claims, damages, or legal disputes that may arise.",
    },
    {
      title: "7. Age Requirement",
      content:
        "By using RateThatSchool, you confirm that you are at least 18 years of age, or, if you are under 18, you have obtained parental consent to use the Service.",
    },
    {
      title: "8. Dispute Resolution",
      content:
        "In the event of disputes or complaints regarding content on RateThatSchool, the admin will review and take appropriate action. We encourage users to report inappropriate content.",
    },
    {
      title: "9. Limitation of Liability",
      content:
        "RateThatSchool is provided 'as is' and without warranties of any kind. We do not guarantee the accuracy, completeness, or availability of the Service. Under no circumstances shall RateThatSchool or its affiliates be liable for any damages arising from the use or inability to use the Service.",
    },
    {
      title: "10. Termination of Accounts",
      content:
        "RateThatSchool reserves the right to suspend or terminate user accounts that violate these Terms, without prior notice. Termination may result from content violations, fraudulent activity, or misuse of the Service.",
    },
    {
      title: "11. Modifications to Terms",
      content:
        "We reserve the right to update these Terms at any time. It is the user's responsibility to regularly review these Terms. Continued use of the Service after changes are made constitutes acceptance of the modified Terms.",
    },
    {
      title: "12. Contact Us",
      content:
        "If you have any questions about these Terms, you can contact us.",
    },
  ],
};

export default function TermsAndConditions() {
  return (
    <>
      <div
        style={{
          // linear-gradient for black layer over the img
          background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url(${schoolImg.src})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="flex h-[300px] items-center justify-center"
      >
        <h1 className="text-3xl capitalize text-white">Terms and Conditions</h1>
      </div>

      <Container>
        <div className="mx-auto max-w-[1200px] space-y-6 py-8 text-gray-700">
          <p>Last updated: {termsAndConditionsContent.lastUpdated}</p>

          <p>{termsAndConditionsContent.welcome}</p>

          {termsAndConditionsContent.sections.map((section, index) => (
            <div key={index}>
              <h2 className="mt-6 text-lg font-medium">{section.title}</h2>
              <p className="m-0">{section.content}</p>
            </div>
          ))}

          <p>
            <a href="https://storyset.com/web">Web illustrations by Storyset</a>
          </p>
        </div>
      </Container>
    </>
  );
}
