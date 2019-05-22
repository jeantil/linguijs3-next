module.exports = {
  webpack:(config, {webpack,...options}) =>{
    // Further custom configuration here
    config.plugins.push(new webpack.IgnorePlugin(/fs/));    
    return config;
  }
};