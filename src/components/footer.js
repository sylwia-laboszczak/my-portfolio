/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor",
    }}
  >
    <div className="container">
      <p>
        A fool with a tool is still a fool. Always have a goal, a plan & the
        tool as the enabler.{" "}
        <span className="icon -love">
          <RiHeart2Line />
        </span>{" "}
        <Link to="/"></Link>
      </p>
    </div>
  </footer>
)

export default Footer
