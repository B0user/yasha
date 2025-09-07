// src/components/BeforeAfterCard.jsx
import { useState } from "react";
import { Card, CardContent, Typography, Box, Dialog } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export function BeforeAfterCard({ project }) {
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  const handleOpen = (src) => {
    setActiveImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setActiveImage(null);
  };

  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: { xs: "24em", md: 700 },
        mx: "auto",
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Typography variant="h6" gutterBottom>
          {project.title}
        </Typography>

        {/* Description */}
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {project.description}
        </Typography>

        {/* Swiper */}
        <Box>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={20}
            style={{
              paddingBottom: "40px", // more room for bullets
            }}
          >
            {project.pairs.map((pair, idx) => (
              <SwiperSlide key={idx}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    px: 1,
                    py: 2,
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  {/* Before */}
                  <Box
                    sx={{ width: "100%", position: "relative", mb: 2, cursor: "pointer" }}
                    onClick={() => handleOpen(pair.before)}
                  >
                    <img
                      src={pair.before}
                      alt={`${project.title} — до`}
                      style={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "8px",
                        fontSize: "0.9em",
                      }}
                    >
                      До
                    </span>
                  </Box>

                  {/* After */}
                  <Box
                    sx={{ width: "100%", position: "relative", cursor: "pointer" }}
                    onClick={() => handleOpen(pair.after)}
                  >
                    <img
                      src={pair.after}
                      alt={`${project.title} — после`}
                      style={{
                        width: "100%",
                        height: 220,
                        objectFit: "cover",
                        borderRadius: 8,
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: 12,
                        left: 12,
                        background: "rgba(0,0,0,0.6)",
                        color: "#fff",
                        padding: "4px 12px",
                        borderRadius: "8px",
                        fontSize: "0.9em",
                      }}
                    >
                      После
                    </span>
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </CardContent>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="xl"
        PaperProps={{
            sx: {
            backgroundColor: "rgba(0,0,0,0.9)", // dark background
            boxShadow: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            },
        }}
        >
        {activeImage && (
            <img
            src={activeImage}
            alt="Preview"
            style={{
                maxWidth: "90vw",   // fit within viewport width
                maxHeight: "90vh",  // fit within viewport height
                borderRadius: 12,
            }}
            />
        )}
        </Dialog>

    </Card>
  );
}
