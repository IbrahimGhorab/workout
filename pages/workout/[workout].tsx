import axios from "axios";
import { useEffect } from "react";
import BrowseExercises from "../../components/browseExercises";

import Layout from "../../components/layout";

const BrowsWorkout = () => {
  return (
    <>
      <Layout element={"Browse Workouts"}>
        <div className="py-6">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl text-center font-semibold text-gray-900">
              Browse our carefully curated exercises
            </h1>
            <p className="text-center text-gray-300">
              Thoughtfully designed exercises meant to push you to the absolute
              limits
            </p>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            <BrowseExercises />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BrowsWorkout;
