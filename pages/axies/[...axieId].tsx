import React from "react"
import { useRouter } from "next/router"
import Layout from "../../components/layout"
import AxieProfile from "../../components/pages/AxieProfile"
import windowWidth from "../../scripts/hooks/window"

export default function AxiePage() {
    const router = useRouter()
    const { axieId } = router.query

    const isDesktop = windowWidth(1400)

    return (
        <Layout isDesktop={isDesktop}>
            <AxieProfile axieId={String(axieId)}/>
        </Layout>
    )
}