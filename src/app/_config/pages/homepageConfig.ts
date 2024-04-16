export const homepageConfig = {
    hero: {
        title: 'Embrace Choice & Control',
        subtitle: 'Evolve K9 - Northern Colorado Dog Training',
        image: 'homepage-hero-image.jpg',
        action: {
            label: 'Schedule a Free Phone Consultation',
            href: '/contact',
        },
    },
    about: {
        body: [
            `Welcome to Evolve K9!  We are dedicated to empowering dogs to make good choices for themselves. Through our training programs, we instill decision-making skills that promote independence, confidence, and a stronger connection between dogs and their owners. Recognizing the importance of a cooperative partnership, our training methods provide owners with the control needed to guide and shape their dog's behavior. `,
            `This empowerment leads to clear communication, well-defined boundaries, and a solid foundation for a harmonious relationship. We specialize in providing clients the skills and knowledge needed to live a harmonious life with their dogs. We simplify the training journey through a holistic approach that includes relationship, freedom, confidence, basic and advanced obedience, as well as targeted behavioral modification.`,
        ],
    },
    contact: {
        title: 'Reach out and take the first step towards empowering your dog to make better decisions for themselves! ',
        subtitle: `Leave us your information and we'll reach out to schedule a phone call consultation within 48 hours.`,
        body: [
            {
                title: 'Contact Evolve K9 LLC – Where we empower clients to train like the pros! ',
                text: `Welcome to Evolve K9, where your canine companions are our top priority. Whether you're seeking information about our specialized training programs, have inquiries about our services, or wish to collaborate, our team is here to assist you.
                `,
            },
            {
                title: 'How to Reach Us:',
            },
            {
                title: 'Contact Form',
                text: `Complete the form below to get in touch with us. Our team is committed to responding to your inquiries promptly and providing the information you need.`,
            },
            {
                title: 'Phone',
                text: `For direct assistance, please call us at (970) 235-8466. We're available during business hours to address your questions and concerns.`,
            },
        ],
        formFields: [
            [
                {
                    label: 'First Name',
                    type: 'text',
                    placeholder: 'Enter your first name',
                    required: true,
                    name: 'first_name',
                },
                {
                    label: 'Last Name',
                    type: 'text',
                    placeholder: 'Enter your last name',
                    required: true,
                    name: 'last_name',
                },
            ],
            [
                {
                    label: 'Zip Code',
                    type: 'number',
                    placeholder: 'Enter your zip code',
                    required: false,
                    name: 'zip_code',
                },
            ],
            [
                {
                    label: 'Area of interest',
                    type: 'text',
                    placeholder: 'Program information, pricing, consultation, etc.',
                    required: true,
                    name: 'area_of_interest',
                },
            ],
            [
                {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'Enter your email',
                    required: true,
                    name: 'email',
                },
            ],
            [
                {
                    label: 'Phone Number',
                    type: 'tel',
                    placeholder: 'Enter your phone number',
                    required: true,
                    name: 'phone_number',
                },
            ],
        ],
        disclaimer: `By submitting this form, you opt-in to receive SMS communications from the Evolve K9 team, Opt-out anytime by replying STOP`,
    },
    programs: {
        title: 'Programs',
        subtitle: 'Explore our Evolved training programs!',
        items: [
            {
                title: 'Evolved Private Training',
                body: `Jump into a personalized training journey, where we not only transform your dog but YOU as well! With 12 private lessons, covering basic and advanced obedience, including off-leash reliability and behavioral modification for ALL issues including aggression and anxiety. Our program includes Relationship Repair, where we help guide you on your journey to redefining your relationship with your dog. Automatic access to Evolve For Life, where you will receive lessons for life and unlimited support!`,
            },
            {
                title: 'Evolved Essentials',
                body: `Optimize your dog's learning experience through 8 private lessons, focusing on basic obedience, basic to intermediate behavioral modifications, and a polished introduction to public spaces. Unveil advanced programs, securing a professionally guided pathway to your dog's ongoing development.`,
            },
            {
                title: 'Puppy Essentials',
                body: `Set yourself and your puppy up for success with 8 private lessons (additional lessons available). Explore Puppy Care and Well-being 101, focusing on problem-solving, structure, and socialization. Lay the foundation for basic and advanced obedience commands, with an emphasis on using play as a reward system. Access advanced programs for an enriched and customized puppy training curriculum.`,
            },
        ],
        action: {
            label: 'Reach out',
            href: '/contact',
        },
    },
    testimonials: {
        title: 'Testimonials',
        items: [
            {
                rating: 5,
                body: `Marcus at EvolveK9 has been working with my border collie Lilly for years. He took her from scared, reactive, and insecure to confident, trusting, and more social. Her quality of life has gone up due to the work Marcus put in with her. I have him to thank for my life long dog best friend. I highly recommend if you want someone professional, knowledgeable and transparent with his approach. You’re dog will be glad you choose Evolve!!`,
                author: 'Benjamin W.',
            },
            {
                rating: 5,
                body: `I cannot recommend Evolve K9 enough! Our pup had some behavioral issues that we were struggling to address, I'd tried everything on the internet but it didn't get us very far. But with the expertise of Marcus, balance has been restored to our lives and our dog has never been happier. Marcus took the time to understand our dogs unique personality and our training goals to curate the perfect training methods. What I appreciate most is that our dog is not only more obedient, but he is 200% more calm and through the help of Evolve K9 we've built a trusting relationship.

                We're incredibly grateful for the positive impact Marcus had on our dog's life, and we wholeheartedly recommend them to anyone in need of top-notch training services.`,
                author: 'Tyler W.',
            },
        ],
    },
    trustedBrands: {
        title: 'Trusted Brands',
        logos: ['/assets/ecollarDealer.jpg'],
    },
}
