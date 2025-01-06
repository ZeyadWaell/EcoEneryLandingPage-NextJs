import React from 'react';
import { Shield, Zap, BarChart3, Settings } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Advanced Hydrogen Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our innovative solution combines cutting-edge technology with practical implementation to deliver remarkable fuel savings.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
            <Shield className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Safety First</h3>
            <p className="text-gray-600">Built with multiple safety mechanisms and certified components</p>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
            <Zap className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Instant Results</h3>
            <p className="text-gray-600">See immediate improvement in fuel efficiency</p>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
            <BarChart3 className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
            <p className="text-gray-600">Monitor your savings with detailed analytics</p>
          </div>
          
          <div className="p-6 border border-gray-100 rounded-xl hover:shadow-lg transition">
            <Settings className="h-12 w-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Maintenance</h3>
            <p className="text-gray-600">Minimal upkeep required with long-lasting components</p>
          </div>
        </div>
      </div>
    </section>
  );
}