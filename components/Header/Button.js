import { ButtonLink } from "../ButtonLink";

export const Button = ( { button } ) => {
    return (
        <div className="ml-5">
            <ButtonLink btnLink={button.destination} btnText={button.label} />
        </div>
    )
}
