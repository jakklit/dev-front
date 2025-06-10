import { getStrapiURL } from "@/lib/utils";
import axios from "axios";

interface RegisterUserProps {
    username: string;
    password: string;
    // email: string;
    role: string;
}

interface LoginUserProps {
    identifier: string;
    password: string;
}

export async function registerUserService(userData: RegisterUserProps) {
    console.log("Register User Service");
    try {
        const response = await axios.post(
            getStrapiURL("/api/register"),
            { ...userData },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log("Response from Register User Service", response.data);
        return response.data;
    } catch (error) {
        console.error("Registration Service Error:", error);
    }
}

export async function loginUserService(userData: LoginUserProps) {
    try {
        const response = await axios.post(
            getStrapiURL("/api/login"),
            { ...userData },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        if (response.status !== 200) {
            throw new Error("Login failed");
        }
        if (response.data.error) {
            throw new Error(response.data.error.message);
        }
        return response.data;
    } catch (error) {
        console.error("Login Service Error:", error);
        throw error;
    }
}