import {
  Table,
  Row,
  Col,
  Tooltip,
  User,
  Text,
  Container,
  Button,
  Loading,
  Checkbox,
} from "@nextui-org/react";
import Image from "next/image";
import { Spacer } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";
import ThreeDotRating from "../components/ThreeDotRating";
import FiveDotRating from "../components/FiveDotRating";
import { useRouter } from "next/router";
import { ReactNode, useCallback, useState } from "react";
import { prisma } from "../db";
import dynamic from "next/dynamic";
import { Skeleton } from "@mui/material";
import { Link } from "@nextui-org/react";
import { useMediaQuery } from "@mantine/hooks";
import Script from "next/script";
import { NextSeo } from "next-seo";

const RatingComponent = dynamic(() => import("../components/Rating"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <Skeleton width={"90%"} height={25} />
    </div>
  ),
});

type UserType = {
  userRating: any;
  id: number;
  name?: string;
  position?: string;
  healthRating?: number;
  speedRating?: number;
  operatorIcon?: string;
  rating: number;
};

export function useRouterRefresh() {
  const router = useRouter();
  const { asPath, replace } = router;

  return useCallback(
    () => replace(asPath, undefined, { scroll: false }),
    [asPath]
  );
}

export default function App({ operators, result }) {
  const [isOnlyAttackers, setIsOnlyAttackers] = useState(false);
  const [isOnlyDefenders, setIsOnlyDefenders] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 900px)", false);

  let refresh = useRouterRefresh();

  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const columns = [
    { name: "POSITION", uid: "position" },
    { name: "HEALTH", uid: "healthRating" },
    { name: "SPEED", uid: "speedRating" },
    { name: "NAME", uid: "name" },
    { name: "ICON", uid: "operatorIcon" },
    { name: "RATING", uid: "rating" },
    { name: "RATE", uid: "rate" },
  ];

  const renderCell = (operator: UserType, columnKey: React.Key) => {
    let attackerExists = Object.values(operator).includes("Attacker");
    let defenderExists = Object.values(operator).includes("Defender");

    const cellValue = operator[columnKey];

    if (isOnlyAttackers && defenderExists) {
      return null;
    }

    if (isOnlyDefenders && attackerExists) {
      return null;
    }

    switch (columnKey) {
      case "operatorIcon":
        return (
          <div className={"flex justify-center"}>
            <Image
              src={operator?.operatorIcon}
              height="50"
              width="50"
              alt="operator icon"
            />
          </div>
        );
      case "speedRating":
        return <ThreeDotRating rating={operator.speedRating} />;
      case "healthRating":
        return (
          <ThreeDotRating rating={operator.healthRating} isHealth={true} />
        );
      case "rating":
        return <FiveDotRating rating={operator.userRating} />;
      case "rate":
        return <RatingComponent ratedEntity={operator} />;
      case "name":
        return (
          <div className={"flex justify-center"}>
            <Text>{cellValue}</Text>
          </div>
        );
      default:
        return cellValue;
    }
  };
  return (
    <>
      <NextSeo
        title="Rainbow Six Tier List"
        description="Looking for the best operators in Rainbow Six Siege? Find the best pick for every role to climb with Rainbow Six Tier List"
        canonical="https://www.r6tierlist.site/"
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZVKEZB5WMT"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZVKEZB5WMT');
        `}
      </Script>
      <div className="">
        <div className="flex flex-col flex-wrap items-center min-w-['90%']">
          {isDesktop && <Spacer />}
          <div className={"flex justify-center items-center flex-wrap"}>
            <Button.Group
              color="black"
              css={{ flexWrap: "wrap", justifyContent: "center" }}
            >
              <Button auto flat>
                <Text h2>
                  <Link href="/">Operators Tier List</Link>
                </Text>
              </Button>
              <Button auto flat disabled>
                <Link>
                  <Text h2>Weapons Tier List | Coming Soon</Text>
                </Link>
              </Button>
              <Button auto flat disabled>
                <Text h2>Gadgets Tier List | Coming Soon</Text>
              </Button>
            </Button.Group>
            <Tooltip
              placement="bottom"
              content={"Community based, anybody can rate"}
            >
              <Button flat>Data source?</Button>
            </Tooltip>
            <div className={"flex items-center"}>
              <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
              />
              <Text h5 className={"m-3"}>
                Day/Night Theme
              </Text>
            </div>
          </div>
          <Spacer />
          {isDesktop ? (
            <Text h1 size={25} weight="bold">
              Rainbow Six Operators Tier List
            </Text>
          ) : (
            <Text h1 size={20}>
              Rainbow Six Operators Tier List
            </Text>
          )}

          <Spacer />

          <div style={{ minWidth: "80%" }}>
            <div className={"flex wrap justify-center md:justify-start"}>
              <Checkbox
                isSelected={isOnlyAttackers}
                onChange={() => {
                  setIsOnlyDefenders(false);
                  setIsOnlyAttackers(!isOnlyAttackers);
                  refresh();
                }}
                className={"m-1"}
              >
                Only Attackers
              </Checkbox>
              <Checkbox
                isSelected={isOnlyDefenders}
                className={"m-1"}
                onChange={() => {
                  setIsOnlyAttackers(false);
                  setIsOnlyDefenders(!isOnlyDefenders);
                  refresh();
                }}
              >
                Only Defenders
              </Checkbox>
            </div>
            <Table
              compact
              aria-label="Example table with custom cells"
              css={{
                height: "auto",
                minWidth: "100%",
              }}
              selectionMode="single"
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column
                    key={column.uid}
                    align={
                      column.uid === "rate" ||
                      column.uid === "name" ||
                      column.uid === "rating" ||
                      column.uid === "operatorIcon"
                        ? "center"
                        : "start"
                    }
                  >
                    {column.name}
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={operators}>
                {(item: UserType) => (
                  <Table.Row>
                    {(columnKey) => (
                      <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async ({}) => {
  // Get avg from db

  const operatorWithRatings = await prisma.operator.findMany({
    include: {
      operatorVotes: true,
    },
    // you can also "select" specific properties
  });

  // Calculate on your API
  const operatorsMap = operatorWithRatings.map((operator) => {
    const ratingsCount = operator.operatorVotes.length;
    const ratingsTotal = operator.operatorVotes.reduce((acc, b) => {
      // console.log(acc, Number(b.rating).toFixed(2), "gggg");
      return acc + Number(b.rating);
    }, 0);
    return {
      ...operator,
      userRating: ratingsTotal / ratingsCount,
    };
  });
  let operators = JSON.parse(JSON.stringify(operatorsMap));

  operators.sort((a, b) => b.userRating - a.userRating);
  // const result = await prisma.$queryRaw`select
  //   avg (rating) as aggregate
  // from
  //   operator_votes
  // where
  //   operator_votes.operator_id = :v1
  //   and operator_votes.operator_id is not null`;

  // const result = await prisma.$queryRaw`select
  //   avg (rating) as aggregate
  // from
  //   operator_votes
  // where
  //   operator_votes.operator_id = :v1
  //   and operator_votes.operator_id is not null`;

  return { props: { operators } };
};
