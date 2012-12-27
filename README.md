Intro
=======================

We have our compilers, editors and build tools for developing our software, yet up till now we were left with a limited set of options when we approached our infrastructure development tasks. 
It would be great to have reproducibility, fast iterations and testability in our infra environments, tools like Vagrant, 
Puppet, FPM and Librarian Puppet help us reach these goals.


Story line
==========

 * The notion of sandboxing, why it will help you to develop faster.
 * Introducing Vagrant:
   * Virtualbox integration.
   * Vagrant boxes.
   * Provioning integration and short intro on Puppet.
   * Distributed networking using sandboxes.
   * Dependency management using Puppet librarian puppet and bundler.
 * Showcasing different use cases:
     * Automatic development environment setup puppet-base-env.
     * Distributed Storm cluster sandbox storm-sandbox.
     * Using Vagrant and for FPM packaging testbed graylog2-sandbox.
  Tricks&Tips:
   
  * Use good hardware,16GB i7 and ssd is dirt chip (-> 3500nis)
