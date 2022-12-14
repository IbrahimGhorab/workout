import Welcome from "../components/welcome";
import Records from "../components/records";
import TimeLine from "../components/timeLine";
import Layout from "../components/layout";


export default function Home() {
  return (
    <>
      <Layout element={"Dashboard"}>
        <div className="py-6">
          <div className="px-4 sm:px-6 md:px-0"></div>
          <div className="px-4 sm:px-6 md:px-0">
            {/* Replace with your content */}
            <div className="py-4">
              <Welcome />
            </div>
            <div className="py-4">
              <Records />
            </div>
            <div className="py-4">
              <TimeLine />
            </div>
            {/* /End replace */}
          </div>
        </div>
      </Layout>
    </>
  );
}
