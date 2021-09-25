type OscarProps = {
    children: React.ReactNode //type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;
}
const Oscar = (props: OscarProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default Oscar
