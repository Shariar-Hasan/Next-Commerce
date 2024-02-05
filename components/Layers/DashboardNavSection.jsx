import NavLink from "../smallUI/NavLink"

const DashboardNavSection = ({
    topic = "",
    routeList = [],
}) => {
    return (
        <>
            <h5 className="text-sm md:text-base font-semibold md:tracking-wide text-gray-400 px-5 py-1 mb-1">{topic}</h5>
            {routeList?.map(({ path, isDashboardRoute, title, icon }, i) =>
                isDashboardRoute &&
                <NavLink
                    key={i}
                    className={`hover:bg-gray-400/50 duration-200 rounded-md py-2 flex items-center gap-x-3 md:text-base text-sm px-5 my-1`}
                    activeClassName="bg-gray-400/20"
                    href={`${path}`}
                    end
                >
                    {icon}
                    <span>{title}</span>
                </NavLink>)}

        </>
    )
}

export default DashboardNavSection