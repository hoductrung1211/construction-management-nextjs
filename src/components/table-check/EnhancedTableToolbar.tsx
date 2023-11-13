import { Button, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import VerifiedIcon from '@mui/icons-material/Verified';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

export default function EnhancedTableToolbar({
    numSelected
}: {
    numSelected: number;
}) {
    return (
        <div className="h-16 px-3 flex justify-between items-center">
            {numSelected > 0 ? (
                <Typography variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography variant="h6" component="div">
                    Recruitment Requests
                </Typography>
            )}

            {numSelected > 0 ? (
                <div className="flex gap-3">
                    {/* <Tooltip title="Verify">
                        <IconButton>
                            <VerifiedIcon />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Reject">
                        <IconButton>
                            <NotInterestedIcon />
                        </IconButton>
                    </Tooltip> */}
                    <Button variant="contained" color="success" endIcon={<VerifiedIcon />}>
                        Approve
                    </Button>
                    <Button variant="contained" color="warning" endIcon={<NotInterestedIcon />}>
                        Reject
                    </Button>
                </div>
            ) : null}
        </div>
    )
}