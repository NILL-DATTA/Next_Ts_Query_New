import { useQuery } from "@tanstack/react-query";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GetLandingPageList } from "@/Api/Functions/list.api";
import {
  listQuery,
  useProductDeleteMutation,
} from "@/CusToomHooks/cms.query.hooks";

interface Doctor {
  name: string;
  title: string;
  description: string;
  _id: number;
}

export default function Product() {
  const { data } = listQuery();
  const deleteMutation = useProductDeleteMutation();

  const handleDelete = (id: number) => {
    deleteMutation.mutate({ id });
    console.log(id);
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Doctors
            </p>
            <h1>Our Experienced Doctors</h1>
          </div>
          <div className="row g-4">
            {Array.isArray(data) &&
              data.map((item: Doctor) => (
                <div
                  className="col-lg-3 col-md-6 wow fadeInUp"
                  data-wow-delay="0.1s"
                  key={item._id}
                >
                  <div className="team-item position-relative rounded overflow-hidden">
                    <div className="overflow-hidden">
                      <Image
                        className="img-fluid"
                        src="/img/team-1.jpg"
                        width={400}
                        height={400}
                        alt={item.name}
                      />
                    </div>
                    <div className="team-text bg-light text-center p-4">
                      <Link href={`/Cms/Product_List/${item._id}`}>
                        <h5>{item.title}</h5>
                      </Link>
                      <p className="text-primary">{item.description}</p>
                      <div className="team-social text-center">
                        <a className="btn btn-square" href="#">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="btn btn-square" href="#">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a className="btn btn-square" href="#">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <button
                          className="btn btn-danger me-2"
                          onClick={() => handleDelete(item._id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
