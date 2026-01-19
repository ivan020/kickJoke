import dotenv from "dotenv";
import { client } from "@nekiro/kick-api";

dotenv.config();

const CLIENT_ID = process.env.KICK_CLIENT_ID || "your-client-id";
const CLIENT_SECRET = process.env.KICK_CLIENT_SECRET || "your-client-secret";

const createConfig = (idClient, secretClient) => {
    if (CLIENT_ID === "your-client-id") {
        throw new Error("your credentials were not set properly");
    }
    return new client({
        clientId: idClient,
        clientSecret: secretClient
    });
};

const showChannelInfo = async (channelSlug, botClient) => {
    try {
        const channelInfo = await botClient.channels.getChannel(channelSlug);
        return channelInfo;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const main = async () => {
    const config = createConfig(CLIENT_ID, CLIENT_SECRET);
    const channelInfo = await showChannelInfo("xqc", config);

    console.log(channelInfo);
};

main();
