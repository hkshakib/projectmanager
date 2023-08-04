import React from "react";

import PropTypes from "prop-types";

import {
  Avatar,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ImageIcon from "@mui/icons-material/PermIdentityOutlined";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const MemberData = [
  { id: "1", Name: "Humayun Kibria Shakib", Designation: "Lead" },
  { id: "2", Name: "Abdullah Al Nayem", Designation: "Senior developer" },
  { id: "3", Name: "Abir Sadat Wasim", Designation: "Senior developer" },
  { id: "4", Name: "Jahirul Islam Hridoy", Designation: "Developer" },
  { id: "5", Name: "Anindita Das", Designation: "Developer" },
];
const TeamMember = () => {
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "divider", boxShadow: 0 }}>
        {MemberData &&
          MemberData.map((member) => {
            return (
              <>
                <ListItem id={member.id}>
                  <ListItemAvatar>
                    <Avatar>
                      <ImageIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                        {member.Name}
                      </Typography>
                    }
                    secondary={
                      <Typography sx={{ fontSize: 12 }}>
                        {member.Designation}
                      </Typography>
                    }
                  />
                </ListItem>
                <Divider
                  variant="inset"
                  component="li"
                  sx={{ listStyle: "none" }}
                />
              </>
            );
          })}
      </Box>
    </>
  );
};

export default TeamMember;
