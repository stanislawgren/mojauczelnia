import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { useAuth } from "../hooks/useAuth";
import { useState, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { UserAvatar } from "./placeholders/UserAvatar";

export const UserNav = () => {
    const auth = useAuth()
    const navigate = useNavigate()
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null)

    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    }

    return <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Opcje">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <UserAvatar />
            </IconButton>
        </Tooltip>
        <Menu
            sx={{ mt: '84px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
        >
            <MenuItem onClick={() => {
                navigate("/profile")
            }}>
                <Typography textAlign="center">Mój profil</Typography>
            </MenuItem>
            <MenuItem onClick={auth.signOut}>
                <Typography textAlign="center">Wyloguj</Typography>
            </MenuItem>
        </Menu>
    </Box>
}