import prisma from "../models/prismaClient.js";

// Create a booking
export const createBooking = async (req, res) => {
  try {
    const { mentorId, startTime, endTime } = req.body;
    const booking = await prisma.booking.create({
      data: {
        userId: req.user.id,
        mentorId,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
      },
    });
    res.json(booking);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// List bookings for a user
export const getBookings = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId: req.user.id },
      include: { mentor: true },
    });
    res.json(bookings);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
