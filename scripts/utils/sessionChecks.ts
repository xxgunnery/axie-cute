import { unstable_getServerSession } from "next-auth"
import { authOptions } from "../../pages/api/auth/[...nextauth]"

export async function checkUserAuthentication(context: any) {
    //console.log(context)
    const session = await unstable_getServerSession(context.req, context.res, authOptions)

    const isNotLoggedIn = !session

    if (isNotLoggedIn) {
        //redirect to login page
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        }
    }

    return {
        props: {
            ...session,
        },
    }
}
