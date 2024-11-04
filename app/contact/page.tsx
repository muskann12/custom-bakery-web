import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-6">
        <h2 className="text-center heading">Contact Us!</h2>

        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="md:w-1/2 md:pr-6">
            <h3 className="form-heading">Get In Touch!</h3>
            <form className="contact-form space-y-6">
              <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  className="input-field"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className="input-field"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info md:w-1/2 md:pl-6">
            <h3>Contact Information</h3>
            <span> DHA Phase 8, Karachi, Pakistan</span>
            <span>(123) 456-7890</span>
            <span>nisarmuskan14@gmail.com</span>
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
