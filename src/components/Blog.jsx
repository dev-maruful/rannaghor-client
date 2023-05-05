import React from "react";
import Pdf from "./Pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto mb-20 mt-10 px-2">
      <PDFDownloadLink document={<Pdf />} fileName="blog-page.pdf">
        {({ loading }) =>
          loading ? (
            <div className="text-center">
              <button className="btn btn-error">Loading PDF</button>
            </div>
          ) : (
            <div className="text-center">
              <button className="btn btn-error">Download PDF</button>
            </div>
          )
        }
      </PDFDownloadLink>
      <br />
      <Pdf></Pdf>
    </div>
  );
};

export default Blog;
