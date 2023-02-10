import React from "react";
import {
  Header,
  Wish,
  Profile,
  Navbar,
  Invitation,
  Gallery,
  Event,
  Footer,
} from "../../components";
import axios from "axios";

const GuestInvitation = ({ guest }) => {
  return (
    <>
      <Header />
      <Invitation guest={guest} />
      <Profile />
      <Event guest={guest} />
      <Gallery />
      <Wish guest={guest} />
      <Footer />
      <Navbar />
    </>
  );
};

export default GuestInvitation;

export const getStaticPaths = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_PRO_URI}/invitation`);
  const invitationDataList = res.data || [];
  const paths = invitationDataList.length
    ? invitationDataList.map((guests) => {
      return {
        params: {
          uuid: guests.unique_Code,
        },
      };
    })
    : [];
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_PRO_URI}/invitation/${params.uuid}`
  );
  const guest = res.data || {};
  return {
    props: {
      guest,
    },
  };
};
