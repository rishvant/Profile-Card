import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import "./card.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "./Loader";
 
const ProfileCard = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
            const result = response.data.results[0];
            setProfile(result);
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <>
            {!loading &&
                <div className="card-cont">
                <Card className="w-full max-w-[48rem] flex-row jus card-inner">
                    <CardHeader
                        shadow={false}
                        floated={false}
                        className="m-0 w-2/5 shrink-0 rounded-r-none profile-img-card"
                    >
                        <img
                            src={profile?.picture.large}
                            alt="card-image"
                            className="h-full w-full object-cover profile-img"
                        />
                    </CardHeader>
                    <CardBody className="details">
                        <Typography variant="h2" color="blue-gray" className="mb-2 naming">
                            {profile?.name.title} {profile?.name.first} {profile?.name.last}
                        </Typography>
                        <Typography color="blue-gray" className="mb-2 font-bold" variant="h4">
                            {profile?.gender}
                        </Typography>
                        <Typography color="blue-gray" className="mb-8 font-bold" variant="h4">
                            {profile?.cell}
                        </Typography>
                    </CardBody>
                    </Card>
                    </div>
            }
            {loading && <Loader />}
        </>
    );
}

export default ProfileCard;