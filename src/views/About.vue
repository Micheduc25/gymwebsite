<template>
  <div class="about-us">
    <h1 class="text-3xl font-bold mt-6 mb-10">We are a StartUp with Innovative Ideas! </h1>

    <section class="about-cards mb-24 flex justify-around">
        <about-card
            title="A Team"
            sub-title="Good Team"
            description="Our team is a very professional team more than your know"
          image="about1.jpg"
        ></about-card>

      <about-card
            title="A Team"
            sub-title="Good Team"
            description="Our team is a very professional team more than your know"
          image="about2.jpg"
        ></about-card>

      <about-card
            title="A Team"
            sub-title="Good Team"
            description="Our team is a very professional team more than your know"
          image="about3.jpg"
        ></about-card>
    </section>

    <section class="our-team">
        <h1 class="team-title text-3xl font-bold">
          Meet Our Heroes
        </h1>
          <h2 class="text-xl ">Our team is friendly, talkative, and fully reliable.</h2>

      <div class="team-members mx-2 flex flex-wrap   mt-6">
        <team-card image="team1.jpg" name="Nzitou Gaetan" qualification="Mechanical and Industrial Engineer, Founder"></team-card>
        <team-card image="team2.jpeg" name="Nobless Numfor" qualification="Mechanical Engineer, Co-founder"></team-card>
        <team-card image="team3.jpg" name="Dze Nadege Flora Ndum" qualification="Marketing Supervisor"></team-card>
        <team-card image="team4.jpg" name="Ajeagah Joy Ataaji" qualification="Mechanical and Industrial Engineer"></team-card>
        <team-card image="team5.jpg" name="Akongoh Reuben" qualification="MECHANICAL DESIGN ENGINEER"></team-card>
        <team-card image="team6.jpg" name="Asonganyi Rouclec" qualification="COMPUTER ENGINEER"></team-card>
        <team-card image="team7.jpg" name="Ngoe Kelson" qualification="Computer Engineer"></team-card>
        <team-card image="team8.jpg" name="Tangu Achilis" qualification="Computer Engineer"></team-card>
        <team-card image="team9.jpeg" name="Ndjock Michel" qualification="Computer Engineer"></team-card>
      </div>
    </section>

    <stats-band></stats-band>
  </div>
</template>

<script>
import aboutCard from "../components/about-card";
import teamCard from "../components/team-card";
import statsBand from "../components/modules/stats-band";
  export  default {
      components:{
        aboutCard,
        teamCard,
        statsBand
      }
  }
</script>

<style lang="scss" scoped ></style>
