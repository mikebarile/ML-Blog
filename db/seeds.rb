# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({email: "rony@magicleap.com", password: "password", first_name: "Rony", last_name: "Abovitz"})
User.create({email: "neal@magicleap.com", password: "password", first_name: "Neal", last_name: "Stephenson"})
User.create({email: "mikebarile13@gmail.com", password: "password", first_name: "Mike", last_name: "Barile"})

Post.create({title: "welcome to magic leap.", created_at: "2014-10-20", body: "I remember when I first discovered diving underwater. I was just a kid, pestering my parents to let me dive, please please please, until one day I had a mask. It filled with seawater every once in a while, and it was just a child's snorkeling kit – but to me it was a portal to a new world: vivid, alive, so very real and so present. Tiny jeweled fish would swim right up to me, peering into the thin glass wall that separated me from them. The world was an awesome place to have great adventures (and yes, I did dive with sharks and barracudas, but that is another story for another day).
I also remember a few other places where I found a new place, a deep ocean to discover: in films, in books, in comics, in art, and in computing. Great movies could transport you to whole new worlds and universes. Books, comics, and art meant creative freedom. Computing meant total personal freedom with technology: I could create something new and share it with my friends. Machines had a language. Science and physics could make sense when put into action with computers. Of all these new things, it was always the real world that was the most magical and amazing. An encounter with a horse on a farm, being with an eagle and her nest at Cape Canaveral, and kayaking with a pod of dolphins in the Florida Keys. Fireflies at night bested any display.

I realized what the real world could give in abundance, our past and current technologies lacked: visceral experience. Being with your friends, seeing a tree, watching a butterfly land on your finger – all of these require direct interaction with our senses. Our media and computing today is separate from us. We watch television, we read books to understand the real or imagined experiences of others. Playing videos games can be awesome, but it can also lack the immediacy of playing football in the mud, or of building a snow fort with your friends. I wondered for many years what it would take to close the gap, to integrate and synthesize all of the things I love. Why couldn't visceral experience combine with computing? Why can't I see a dragon? Why can't computing interact us with us more naturally, like the real world?

Magic Leap was founded on an idea: that computing and technology should bend to us, to our needs, to our humanity, and to our experience. People should be first. Technology should serve us. Computing should match human experience, it should respect human physiology.

Computing can feel like everyday magic, and it can feel much more human, much more like our world. Our mission is to deliver on this dream, so that people can benefit in new ways from the power of computing, from the possibilities of being connected, sharing, and knowing.

We are also working hard to make video game experiences in our system really freaking cool. I love working with Graeme Devine – he understands that a new medium requires new thoughts on game design, new SDK tools. I want Magic Leap to become a creative hub for gamers, game designers, writers, coders, musicians, filmmakers, and artists.

We also have the possibility to positively transform the process of education. To change how we design things. To make our communications feel real. How we shop. How we create. How we discover each other, and how we can explore completely new worlds.

Magic Leap is in the very beginning of its journey. We are reaching out to application developers, to artists, and to musicians. We are meeting with major production companies, but we are just as excited when we meet a single developer, dreaming big dreams.

The world at times can be hard and cynical. But every generation deserves its chance to dream again, to dare to fly to the moon. The world today can be frightening at times, but the promise of a good life is always there. It takes creative thinking. It takes open minds. That is where we are going. I hope that you can join us.

-talk to you soon,

Rony", user_id: 1})

Post.create({title: "an unexpected adventure", created_at: "2014-12-17", body: "A few months ago, two Irishmen, a Scot, and an American appeared on my doorstep with Orcrist, aka '"'Goblin-cleaver,'"' the ancient sword forged during the First Age of Middle Earth by the High Elves of Gondolin, later retrieved from a troll hoard by Thorin Oakenshield. It’s not every day that someone turns up at your house bearing a mythic sword, and so I did what anyone who has read a lot of fantasy novels would: I let them in and gave them beer. True to form, they invited me on a quest and asked me to sign a contract (well, an NDA actually).
The sword-bearers were from a company that had been jumping up and down in my peripheral vision for a year or two. A company with a funny name (Magic Leap), an out-of-the-way location (Fort Lauderdale), and a tendency to play its cards close to its vest. Sir Richard Taylor, founder and head of WETA Workshop, is a member of Magic Leap’s board of directors, which explains why they are able to show up with ice-breakers like Orcrist. Alas, I didn’t get to add it to my own personal troll hoard. But there is talk of replacing it with a high-tech katana like the one wielded by Hiro Protagonist: a fictional character in Snow Crash, a book I wrote twenty-five years ago.

If you’re one of the seven billion people who haven’t read Snow Crash, I’ll explain that it has a lot to do with both virtual reality (VR) and augmented reality (AR). When I wrote it, it seemed as though those technologies were just around the corner. Accordingly, Snow Crash is set in a near-future world.

In practice, it has taken longer than just about anyone expected to get that kind of tech consumer-ready. The devil has turned out to be in the details of satisfying the amazingly finicky human visual system.

The retina lies outside of what we normally think of as the brain, but it performs brain-like processing operations on the light that strikes it. What it feeds down the optic nerve to the brain proper isn’t so much an image as it is the beginnings of an idea--something that has already been thought about by that chunk of peripheral brain in the back of the eyeball. Banging photons off of this thing in an effort to fool it turns out to be hard. For hundreds of millions of years of animal and human evolution, seeing stuff that’s actually there = not dying = getting to have children.

So it was in an appropriately skeptical frame of mind that, a few weeks later, I traveled to what for me is the opposite corner of the United States. In a teeming, overcrowded hardware lab in a South Florida strip mall, I got the demo from Rony, the founder and CEO. Shortly thereafter, I agreed to become Magic Leap’s Chief Futurist.

Here’s where you’re probably expecting the sales pitch about how mind-blowingly awesome the demo was. But it’s a little more interesting than that. Yes, I saw something on that optical table I had never seen before--something that only Magic Leap, as far as I know, is capable of doing. And it was pretty cool. But what fascinated me wasn’t what Magic Leap had done but rather what it was about to start doing.

Magic Leap is mustering an arsenal of techniques--some tried and true, others unbelievably advanced--to produce a synthesized light field that falls upon the retina in the same way as light reflected from real objects in your environment. Depth perception, in this system, isn’t just a trick played on the brain by showing it two slightly different images.

Most of the work to be done is in applied physics, with a sizable dollop of biology--for there’s no way to make this happen without an intimate understanding of how the eye sees, and the brain assembles a three-dimensional model of reality. I’m fascinated by the science, but not qualified to work on it. Where I hope I can be of use is in thinking about what to do with this tech once it is available to the general public. '"'Chief Futurist'"' runs the risk of being a disembodied brain on a stick. I took the job on the understanding that I would have the opportunity to get a few things done.

============================================================

Magic Leap is not exclusively about games. It’s also going to be a great tool for readers, learners, scientists, and artists. Games, however, are a good place to start talking about why this tech is different.

I’m a huge fan of games that consist of two-dimensional figments moving around on flat screens. I have been since I was in high school. Of note is that I haven’t been in high school for four decades.

My friend Seamus Blackley has one of the finest collections of restored arcade games in the world. A lot of these--Space Invaders, Robotron, the 1983 Atari Star Wars arcade game--played a big part in my life, and so I am with him up to a point. But he has other things he could be doing with his talents than hunching over thirty-year-old circuit boards with a soldering iron. I have come to understand that Seamus, somewhat like an art historian checking out Rembrandt’s brushwork, appreciates all of the cleverness and artfulness that the makers of these games--the nerds behind the curtain, the hacker artists--had to show in order to achieve fun results on what now looks like primitive hardware.

I sometimes feel that the creative minds who make games have done about as much as is possible in two dimensions. It’s hard to imagine how the current crop of games, for example, could be more finely tuned to deliver that particular kind of entertainment. It feels like the right time to give those people a new medium: one in which three-dimensionality is a reality and not just an illusion laboriously cooked up by your brain, and in which it’s possible to get up off the couch and move--not only around your living room, but wherever on the face of the earth the story might take you. Making such games is not going to be a matter of porting existing ones to the new system. It’s going to mean redefining the medium from the ground up.

What applies to games applies as well to other things of interest, such as making the world safe for books, doing new things with science and math visualization, and simply creating art for art’s sake. Regarding all of those things, I look forward to making future posts on this blog.", user_id: 2})

Post.create({title: "what's love got to do with it?", created_at: "2015-02-15", body: "What does love have to do with a technology company? Everything. At least for us here at Magic Leap. Our whole company is based on it. It starts with a love for people in general - wanting to bring joy and a sense of magic and wonder to everyone. We try hard to find and hire individuals who bring a love of their work and craft, a deep sense of passion and drive and creative energy to every aspect of what we are developing. Love never ends - it is that deep, human part of us that allows us to connect, to experience transcendent spiritual wonder. Technology will never replace human relationships and bonds, and it will never replace the amazing world around us. But it can enable us to open up those parts of us we first felt as kids. Complete joy and wonder and love of others and the creatures and plants and people all around us.
When someone creates something with a sense of love and passion - you feel it, and you taste it. It can be a chocolate chip cookie, a drawing, a concert, or a film. That feeling transmits to us somehow through the medium.

In the new medium we are creating, we hope that the love we are pouring into it all now, and the intensity and passion that will come from everyone who creates something cool and amazing with it - will come through all bright and shiny and awesome.

Happy Valentines Day :-)

Rony", user_id: 1})

Post.create({title: "the mom rule", created_at: "2015-02-26", body: "I love the dream of VR and AR.

I love ice cream.

I love my Mom (and Dad).

At my last company (Mako) I put in place '"'The Mom Rule'"' - above and beyond all of our FDA regulations, ISO regulations, and international regulations that governed the safety and quality of products used on people during surgery - what I really cared about was “The Mom Rule.”

It was simple - before we shipped anything, I would ask the team and our team leads:

'"'Would you use this on your Mom?'"' (or Dad, assuming you had a generally healthy and good relationship with them).

I would need to look people in the eye because that question hits home. It is not generalized safety blah blah blah. It was '"'would you allow your Mom, who gave birth to you and cared for you and gave you life - would you let her be subject to this thing we built?'"'

Until the answer was a complete ‘yes’ all around - we did not ship.

And yes - we ultimately used our devices on many Moms and Dads and brothers and sisters and grandparents and cousins and friends - including the Moms and Dads and siblings of our team, and even the Mom of our top software architect (Lou).

What does this have to do with Magic Leap?

There is not anyone in the world who is not someone's Mom or Dad or brother or sister or son or daughter or friend or cousin.

We need the same rule - and when we ship our Magic Leap products - we want to know that our system is awesome, chock full of great software and experiences and design - but that at the top of our list we know that it is safe. Safe to use - safe for a kid to use. Safe for a teenager. Safe for your bro or sis. Safe for your Mom and Dad. Safe for you.

The dream of AR and VR, of allowing our human creativity to express itself in the ultimate medium of visual reality – that is freaking awesome. I want to make that happen. That is a big giant ice-cream sundae with hot fudge and peanuts and whipped cream and a cherry on top. And a side-car of hot fudge too.

That dream we all share of this amazing future – it will happen. But it has to pass '"'The Mom Rule'"' first.

Rony", user_id: 1})

Post.create({title: "atoms not included", created_at: "2016-02-03", body: "Have you ever wondered about the difference between a product and a piece of art? Why in some films, food, cars, cameras, books, music, and in almost anything (even a kiss) you can detect that extra feeling, that bit of care, respect and artisanship that tells you that someone, somewhere, put their heart and soul into what you are experiencing?

If you can, find someone who has an old Leica camera, a 1950’s Fender Stratocaster or Gibson Les Paul, or a Ramirez classical guitar. Someone thought deeply about every detail – every curve, every bit of glue, every ounce of the material.

Hopefully you have had at least one parent or friend or spouse or significant other make something special for you – warm chocolate chip cookies; dinner after a long day; or eggs and pancakes (with real maple syrup and fresh-squeezed orange juice) in the morning – at least once. And maybe you’ve done the same for someone else.

Art is everywhere, and can be in everything. It is where the feeling of the person (or people) creating the thing for you, is infused into their creation with their spirit, their warmth, and with a depth of feeling and intensity that somehow translates back to you. Great actors and musicians communicate this feeling – it is why we love them. Painters and sculptors can imbibe their works with this spirit and emotion. You can feel this essence in the best novels and film, and you can enjoy it in the best foods, made thoughtfully and with great care.

Here at Magic Leap we are gearing up for our First. Let’s not call it a product, although it is a product on many levels; but on some levels it needs to be more. We are setting up supply chain operations, manufacturing - many whirligigs and test machines and gizmos abound these days. Engineers move about our spaces with a sense of urgency. Intense debates about every form of science and art you can imagine float about. Plans have been made. Program and production managers track progress. Coders are coding. Operational and financial systems are being upgraded so that we can scale and deliver at the required volumes. Our First thing will not be everything. But it will be a big step in a whole new direction.

In my mind what we are really doing will transcend what can be contained in a physical product, the thing with atoms and such. What we will bring to you, the part you will really love and find special, is the part without atoms.

We are building a wonderful, special thing – whose purpose is to gently, and in harmony with you (your physiology, your being), produce a Digital Lightfield™ - a living river of light sculpture, which can transmit to you the feelings of magic and experience and presence. We call this our Mixed Reality Lightfield™. It comes to life by following the rules of the eye and the brain, by being gentle, and by working with us, not against us. By following as closely as possible the rules of nature and biology, we can deliver what is truly next.

We are creating the future computing platform for everyone, one of context, presence, intelligence, and experience. The technical bits are very cool and interesting and amazing – to those of you who will want to geek out. To paraphrase The Martian, “we are science-ing the heck out of it”.

But we are also creating something more. Our Mixed Reality Lightfield™ is the result of really cool engineering and design – but the emotion and feeling and joy comes from all over: from a community of creative and curious people, from the biggest studios in the world, from ingenious application developers, and from everyone who has an idea, including you. Ideas, love, feeling, artisanship, care, and joy – these will come from everywhere and everyone.

We want to make you smarter – not machines. We want you to feel empowered and connected to your friends and family and the world, in a way that feels much more natural than computing today. Today’s internet is one of data and information. Our vision at Magic Leap contemplates a connected, creative, and collective world of human experience.

We are dreaming the same dreams that captivate you, ones that go beyond what we see, and have seen. These are ancient dreams, but also extremely modern. We see these ideas in every culture, in books, in films, in paintings, and in our imaginations. Magic Leap will contribute to a part of this collective imagination – a new medium and way to unlock our collective thoughts and passions and creative will.

The parts that transcend atoms, the parts that make us thinking and feeling people; this is the most important part of our collective, creative future. Computing that bends to people’s needs, computing that makes us smarter, that allows us in all ways to have a better and more complete human experience, one of communication and sharing and enjoying. This is what we are working hard to achieve, an ideal which becomes a life’s work – what we all at Magic Leap hope can be understood in each step we take on this journey.

We are working hard to deliver the very best parts to you, atoms not included.

:-)

Rony", user_id: 1})

Post.create({title: "magic leap - gearing up for an exciting year", created_at: "2016-12-10", body: "Hi everyone,

It has been a while since I wrote to you all about what’s been going on at Magic Leap. The team and I are humbled by the overwhelming interest and support for our vision and technology. All of us are pouring very long hours, heart, and soul into making something new – how we will enable your digital and physical worlds to come together in a very personal, social, and magical way.

As we near the end of 2016 and roll into a New Year, I wanted to give all of you a glimpse behind the scenes at Magic Leap.

We have completed our first PEQ (Product Equivalent) build of our target form factor, in our new facility.
We are about to start a much bigger PEQ run, which will exercise our supply chain and manufacturing/quality operations.
The units we are building now are for engineering and manufacturing verification/validation testing, early reliability/quality testing, production line speed, and a bunch of other important parameters.
There is also a lot more going in our development of software, applications, cool creative experiences and overall operational readiness.
Stay tuned – the fun is just beginning.

:-)

Rony", user_id: 1})

Post.create({title: "hi magic leap! it's mike", created_at: "2017-01-03", body: "Hi team,

I can't tell you how excited I am to be interviewing with Magic Leap! I've been scraping the internet for any scrap of news or information about your company ever since I first heard of it around two years ago. As many of my friends will attest, it's been a dream of mine to work at your company where you're building such interesting and impactful technology. I'm really excited about the opportunity to interview with your for a developer role!

I think I have extremely relevant experience and will be able to immediately contribute to the web team. I have experience accross the entire web stack, including on Rails and PostgreSQL on the backend and React, Redux, JQuery, and vanilla JS on the front end. I also have extensive data analytics engineering experience from my time at Uber where I built several internal tools that are used by thousands of people today. I'm a non-stop learner and my biggest priority in my next role is to learn as much as possible.

I hope you enjoy this clone I built of your web blog app! I'm really excited for your feedback and for next steps.

Looking forward to connecting soon :)

Cheers,
Mike
"})

Comment.create({body: "I can't wait to see what Magic Leap has in store for 2017 :)", post_id: 6, user_id: 3})
