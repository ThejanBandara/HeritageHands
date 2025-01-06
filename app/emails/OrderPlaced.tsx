import { Body,  Column, Font, Head, Html, Img,  Row, Section, Tailwind } from "@react-email/components";
import * as React from "react";

export default function Email() {
    
    return (
        <Html>
            <Head>
                <Font fontFamily="Inter"
                    fallbackFontFamily={"Helvetica"}
                    webFont={{
                        url: 'https://fonts.googleapis.com/css2?family=Inter&display=swap',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Tailwind>
                <Body>
                    <Section className=" mx-auto my-auto">
                        <Row>
                            <Column align="center">
                                <Img
                                    alt="HeritageHands Logo"
                                    height="60"
                                    src="https://i.postimg.cc/8zt9bwn3/logolong.png"
                                />
                            </Column>
                        </Row>
                    </Section>
                    <Section>
                        <p>Order ID: {}</p>
                    </Section>

                </Body>
            </Tailwind>
        </Html>
    );
}
