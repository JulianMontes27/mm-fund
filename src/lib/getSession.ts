import { auth } from "@/auth";
import { cache } from "react";

export default cache(auth); //within single server req
