import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <section>
      <div className="bg-white px-4 sm:px-10 pt-20 pb-6">
        <h1 className="text-2xl sm:text-4xl text-center font-semibold text-lime-600">
          2nd To None Precision Firearms, LLC
        </h1>
      </div>

      <div className="relative h-72 w-full">
        <img
          className="h-full w-full object-cover"
          src="https://2ndtononeprecisionfirearms.com/wp-content/uploads/2024/04/dark-texture-background-fresh-central-wallpaper-dark-patterns-hd-wallpapers-of-the-day-of-dark-texture-background.webp"
          alt="Dark texture background"
        />

        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <Link
            to={"/"}
            className="text-white text-2xl sm:text-3xl font-bold text-center px-4 cursor-pointer"
          >
            Home
          </Link>
          <span className="text-lime-500 text-2xl sm:text-3xl font-bold">
            /&nbsp; Rules
          </span>
        </div>
      </div>

      <div className="px-4 sm:px-10 py-10">
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-lime-500 font-bold text-2xl sm:text-3xl">
            SPORTSMAN PARADISE RULES
          </h1>
          <p className="font-normal text-sm sm:text-base">
            1. Must be 21 to participate!! Have fun and please be respectful to
            other players.
          </p>
          <p className="text-sm sm:text-base">
            2. This page consists of items that will be given out with donations
            from the members. If you’re wondering how things work just ask. Any
            negative comments of any kind will not be tolerated and you will be
            warned or removed from the group. Using profanity will get flagged
            by FB bots and cause you to get warned or removed from the group.
          </p>
          <p className="text-sm sm:text-base">
            3. Let’s have fun and get some things given away. All items are new
            and will be shipped.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-lime-500 font-bold text-2xl sm:text-3xl">
            How do the webinars work?
          </h1>
          <p className="font-normal text-sm sm:text-base">
            1. Prior to the webinar being posted, we will record a video to
            determine the FREE seat on the webinar. When the webinar is over and
            a winner is selected Live, we will post this pre-recorded Video on
            our Live group.
          </p>
          <p className="text-sm sm:text-base">
            2. When we post a teaser that shows the next item coming up; if you
            are interested in playing, simply click LIKE and we will tag your
            name when it goes up so you get notified.
          </p>
          <p className="text-sm sm:text-base">
            3. Pick a seat on the Mainboard and we will advise if the item is{" "}
            <b>FREE</b> or <b>Not Free</b>. If free, there’s nothing for you to
            do. If Not Free, please send in your donation for the amount posted
            on the webinar. Please do this when you find out a seat is Paid to
            prevent delays at the end.
          </p>
          <b className="text-sm sm:text-base">
            4. Do NOT reply to a comment with a seat # as these can be hidden
            from us due to FB failing notifications… Please use the MAIN thread
            to make all seat choices.
          </b>
          <p className="text-sm sm:text-base">
            5. Please do NOT edit your comments as this gets confusing as we do
            not refresh the page constantly.
          </p>
          <p className="text-sm sm:text-base">
            6. Do NOT use words like Gunnn, Gunnnnns, Firearrrrms in your
            comments. Instead use the term{" "}
            <b>
              <i>Pew Pew</i>
            </b>{" "}
            as they get flagged by FB.
          </p>
          <p className="text-sm sm:text-base">
            7. Do NOT Edit or Delete any comments you make on the board as it
            causes confusion to the Admin and the other players who are looking
            to select a seat. If the seat you chose was picked before you, I
            will let you know in my reply.
          </p>
          <p className="text-sm sm:text-base">
            8. If a Mini is ran to help fill the Main, the drawing is also done
            LIVE. These drawings will be done using a Random Number generator.
          </p>
          <p className="text-lime-500 font-semibold text-lg sm:text-2xl">
            What is a Mini?
          </p>
          <p className="text-sm sm:text-base">
            • A Mini is a cheaper way to get onto the Main Webinar board. For
            example:
          </p>
          <div className="flex flex-col">
            <h1 className="text-lime-500 font-semibold text-2xl">
              Mini 1 – THREE Winners
            </h1>
            <ul className="text-md font-medium text-gray-800 pl-6">
              <li>• 32.50 a seat</li>
              <li>• 3 spots each receive Paid MAIN seats (2,2,1)</li>
              <li>• BOGOs on BOOKS (1,11)</li>
            </ul>
          </div>
          <p className="text-sm sm:text-base">
            1. The above means, there are 3 Seats who will get Paid Main seats.
            1st place gets 2 paid mains, 2nd place gets 2 Paid mains, and the
            3rd place gets 1 Paid main seat. Each person will pick in order and
            pick until they find the # of Paid seats they were awarded. This
            allows each of them to find FREE seats.
          </p>
          <p className="text-sm sm:text-base">
            2. If you claim a seat, please make sure to donate within a
            reasonable time or your seat will be forfeited to the next member
            (30 minutes from the time a Mini is filled OR 30 minutes from the
            end of the webinar). In the event, the player doesn’t respond, we
            will go LIVE and use Random. org to select their numbers.
          </p>
          <p className="text-sm sm:text-base">
            3. Additionally, if you win a Main seat from a Mini, please select
            that seat within 30 minutes to keep the webinar moving along. On
            rare occasions, we would be forced to utilize Random.org to select a
            seat for them.
          </p>
          <p className="text-sm sm:text-base">
            4. Failure to comply and adhere to the Rules can get you Banned /
            Blocked from the group.
          </p>
          <p className="mb-10 text-sm sm:text-base">
            5. Please follow the details on each <b>webinar</b> posted for the
            price, number of <b>seats</b>, and anything else like Bogos for
            Bookends.
          </p>
          <p className="bg-lime-500 p-2 rounded mx-2 text-md font-medium mb-10">
            • To keep the group, clean and clear… We do not allow members to
            post introductions to the group.
          </p>
          <p className="text-base sm:text-lg font-semibold">
            • No items listed are for private sale, trade, or transfer. No
            exceptions.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-lime-500 font-bold text-2xl sm:text-3xl">
            Definitions:​
          </h1>
          <p className="text-sm sm:text-base">
            1. Main – This is the initial board on any webinar. These are Full
            Priced and Free seats.
          </p>
          <p className="text-sm sm:text-base">
            2. Mini – This is a subset of the Main webinar where you can win
            Main seats at a reduced cost.
          </p>
          <p className="text-sm sm:text-base">
            3. Bookend aka Books – When the webinar dictates it, the player can
            call Books and receive the lowest # and the highest # seat on the
            Mini for the cost of a single seat.
          </p>
        </div>
        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-lime-500 font-bold text-2xl sm:text-3xl">
            How are winners determined?​​
          </h1>
          <p className="text-sm sm:text-base">
            1. All drawings are done in real time and LIVE video on our sister
            group <b>Sportsmans Paradise LIVE</b> for each member to join and
            watch. If you are not a member of the <b>Live group</b>{" "}
            (https://www.facebook.com) simply request access and it will be
            granted shortly after.
          </p>
          <p className="text-sm sm:text-base">
            2. You do <b>NOT</b> have to be present at the LIVE drawing in order
            to win an item, we will contact you.
          </p>
        </div>

        <div className="flex flex-col gap-4 mb-10">
          <h1 className="text-lime-500 font-bold text-2xl sm:text-3xl">
            What Donations are accepted?​​
          </h1>
          <p className="text-sm sm:text-base">
            1. Donation methods can include, but not limited to: Apple Pay,
            Zelle, and Swipe Simple. Please sign up for one of these services.{" "}
            <b>If you do not have any of these services, please do not play</b>.
            The current donations are posted at the bottom of each webinar.
          </p>
          <p className="text-sm sm:text-base">
            2. You do <b>NOT</b> have to be present at the LIVE drawing in order
            to win an item, we will contact you.
          </p>
          <div className="mb-10">
            <p className="text-lg font-medium text-red-500">
              • Donations are not refundable under any circumstances!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rules;
