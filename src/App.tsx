import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";
import Header from "./components/Header";
import Panel from "./components/Panel";
import PriceOption from "./components/PriceOption";
import styles from "./default.module.css";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Panel padding={24}>
          <div
            style={{
              width: "525px",
              height: "225px",
            }}
          >
            <h2 className={styles.h2}>Cloud Computinng Developers Trust</h2>
            <p className={styles.text}>
              Cloud Computing Developers Trust Build, run, and secure your cloud
              workloads on SuperNet Connected Cloud, a massively distributed
              edge and cloud platform.{" "}
              <a href="#" className={styles["inline-link"]}>
                Sign up
              </a>{" "}
              today or{" "}
              <a href="#" className={styles["inline-link"]}>
                contact us
              </a>{" "}
              to learn more.
            </p>
          </div>
          <div
            style={{
              width: 506,
              height: 332,
              padding: 64,
              borderRadius: 8,
              gap: 24,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#313131",
              alignItems: "center",
            }}
          >
            <Button
              primary
              height={56}
              width={360}
              text="Sign up with Google"
              leftSection={
                <img
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  src="../src/assets/Google.png"
                />
              }
            />
            <div
              style={{
                width: "360px",
                border: "1px solid #242424",
              }}
            />
            <Button
              leftSection={
                <img
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  src="../src/assets/Github.png"
                />
              }
              height={56}
              width={360}
              text="GitHub"
            />
            <Button
              leftSection={
                <img
                  style={{
                    width: 24,
                    height: 24,
                  }}
                  src="../src/assets/Email.png"
                />
              }
              height={56}
              width={360}
              text="Email"
            />
            <p className={styles.text} style={{ textAlign: "center" }}>
              By providing your email address or using a single sign-on provider
              to create an account, you agree to our{" "}
              <a href="#" className={styles["inline-link"]}>
                Terms of Service
              </a>{" "}
              and that you have reviewed our{" "}
              <a href="#" className={styles["inline-link"]}>
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className={styles["inline-link"]}>
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </Panel>
        <Panel column>
          <div className={styles.feature} style={{ width: 607 }}>
            <h2 className={styles.header}>Features</h2>
            <p className={styles.text}>
              From edge locations world wide, to unparalleled security and DDOS
              protection, we've got you covered.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 48,
            }}
          >
            <Card
              image="../src/assets/EdgeNetwork.png"
              title="EDGE NETWORK"
              text={
                <>
                  <p>
                    Discover our industry leading edge network, with over 300
                    edge nodes scattered around the globe.
                  </p>
                  <p>
                    Give your customers the best performance in every corner of
                    the world.
                  </p>
                </>
              }
            />
            <Card
              image="../src/assets/Security.png"
              title="Security"
              text={
                <>
                  <p>Stay safe from threats without slowing down.</p>
                  <p>
                    SuperNet surrounds and protects your entire ecosystem —
                    clouds, apps, APIs, and users.
                  </p>
                </>
              }
            />
            <Card
              image="../src/assets/DDOSProtection.png"
              title="DDOS PROTECTION"
              text={
                <>
                  <p>
                    Highly rated web, application & network DDoS protection.
                  </p>
                  <p>Keeping bots and malicious users at bay.</p>
                </>
              }
            />
            <Card
              image="../src/assets/Backups.png"
              title="BACKUPS"
              text={
                <>
                  <p>
                    Fully managed automatic daily, weekly, and biweekly backups
                    of your Compute Instances.
                  </p>
                  <p>
                    Have peace of mind knowing that your data is always safe.
                  </p>
                </>
              }
            />
          </div>
        </Panel>
        <Panel column>
          <div className={styles.feature} style={{ width: 834 }}>
            <h2 className={styles.header}>Edge Network</h2>
            <p className={styles.text}>
              Scale your business on the most distributed compute, security, and
              delivery platform — from cloud to edge. New core compute regions
              launched.{" "}
              <a href="#" className={styles["inline-link"]}>
                Learn more.
              </a>
            </p>
          </div>
          <img
            className={styles.map}
            src="../src/assets/Map.png"
            alt="Edge network map"
          />
        </Panel>
        <Panel column>
          <div className={styles.feature} style={{ width: 784 }}>
            <h2 className={styles.header}>Pricing</h2>
            <p className={styles.text}>
              Cut your cloud bills in half with bundled extras like DDoS
              Protection, cloud firewalls, and generous transfer.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              gap: 64,
              flexWrap:"wrap",
              justifyContent:"center"
            }}
          >
            <PriceOption
              price={9}
              name="Standard"
              bullets={[
                "10 GB of space",
                "Unlimited Traffic",
                "Forum Access",
                "Support at $25/hour",
              ]}
            />
            <PriceOption
              grow
              price={49}
              name="Professional"
              bullets={[
                "30 GB of space",
                "Unlimited Traffic",
                "Forum Access",
                "Support at $5/hour",
              ]}
            />
            <PriceOption
              price={159}
              name="Enterprise"
              bullets={[
                "50 GB of space",
                "Unlimited Traffic",
                "Forum Access",
                "Free Support",
              ]}
            />
          </div>
        </Panel>
      </main>
    </>
  );
};

export default App;
