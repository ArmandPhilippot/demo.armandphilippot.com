#!/usr/bin/env bash
#
# Build
# Build all Angular, React & Vue projects.

###############################################################################
# 1.0. Config
###############################################################################
_ANGULAR_PROJECTS="projects/angular-small-apps"
_REACT_PROJECTS="projects/react-small-apps"
_VUE_PROJECTS="projects/vue-small-apps"

###############################################################################
# 2.0. Helpers
###############################################################################
_COLOR_RESET=$(printf '\e[0m')
_COLOR_BLUE=$(printf '\e[34m')
_COLOR_GREEN=$(printf '\e[32m')
_COLOR_RED=$(printf '\e[31m')
_COLOR_YELLOW=$(printf '\e[33m')

# Print an error prefixed by a colorized "Error:".
error() {
  printf "%sError:%s %s\n" "$_COLOR_RED" "$_COLOR_RESET" "$1"
}

# Print an info prefixed by a colorized "Info:".
info() {
  printf "%sInfo:%s %s\n" "$_COLOR_BLUE" "$_COLOR_RESET" "$1"
}

# Print a success prefixed by a colorized "Success:".
success() {
  printf "%sSuccess:%s %s\n" "$_COLOR_GREEN" "$_COLOR_RESET" "$1"
}

# Print a warning prefixed by a colorized "Warning:".
warning() {
  printf "%sWarning:%s %s\n" "$_COLOR_YELLOW" "$_COLOR_RESET" "$1"
}

# Check if the provided command is installed.
is_command_installed() {
  [ -x "$(command -v "$1")" ]
}

# Display an error in case of an unplanned scenario then exit.
error_unexpected() {
  error "An unexpected error occurred."
  printf "Exit.\n"
  exit 1
}

###############################################################################
# 3.0. Angular
###############################################################################

install_angular_dependencies() {
  if [ ! -d "./public/${_ANGULAR_PROJECTS}" ]; then
    error "Angular projects are missing."
    printf "Exit.\n"
    exit 1
  fi

  cd "./public/${_ANGULAR_PROJECTS}" || exit
  yarn
  cd "$OLDPWD" || exit
}

build_angular_app() {
  [ $# -ne 1 ] && error_unexpected

  cd "./public/${_ANGULAR_PROJECTS}" || exit
  yarn --cwd "apps/${1}" run build --base-href="/${_ANGULAR_PROJECTS}/apps/${1}/dist/${1}/"
  info "${1} built."
  cd "$OLDPWD" || exit
}

setup_angular_projects() {
  install_angular_dependencies
  build_angular_app "recipes"
  success "Angular apps are ready."
}

###############################################################################
# 4.0. React
###############################################################################

install_react_dependencies() {
  if [ ! -d "./public/${_REACT_PROJECTS}" ]; then
    error "React projects are missing."
    printf "Exit.\n"
    exit 1
  fi

  cd "./public/${_REACT_PROJECTS}" || exit
  yarn
  cd "$OLDPWD" || exit
}

build_react_app() {
  [ $# -ne 1 ] && error_unexpected

  cd "./public/${_REACT_PROJECTS}" || exit
  PUBLIC_URL="/${_REACT_PROJECTS}/apps/${1}/build/" yarn --cwd "apps/${1}" run build
  info "${1} built."
  cd "$OLDPWD" || exit
}

setup_react_projects() {
  install_react_dependencies
  build_react_app "meme-generator"
  build_react_app "notebook"
  build_react_app "todos"
  success "React apps are ready."
}

###############################################################################
# 5.0. Vue
###############################################################################

install_vue_dependencies() {
  if [ ! -d "./public/${_VUE_PROJECTS}" ]; then
    error "Vue projects are missing."
    printf "Exit.\n"
    exit 1
  fi

  cd "./public/${_VUE_PROJECTS}" || exit
  yarn
  cd "$OLDPWD" || exit
}

build_vue_app() {
  [ $# -ne 1 ] && error_unexpected

  cd "./public/${_VUE_PROJECTS}" || exit
  PUBLIC_URL="/${_VUE_PROJECTS}/apps/${1}/dist/" yarn --cwd "apps/${1}" run build
  info "${1} built."
  cd "$OLDPWD" || exit
}

setup_vue_projects() {
  install_vue_dependencies
  build_vue_app "typing"
  success "Vue apps are ready."
}

###############################################################################
# 6.0. Main
###############################################################################

# Check if Yarn is installed.
is_yarn_installed() {
  printf "Checking if Yarn is installed...\n"
  if is_command_installed "yarn"; then
    info "Yarn is installed."
  else
    error "This program needs Yarn to proceed. Please install it."
    printf "Exit.\n"
    exit 1
  fi
}

# Build Angular, React & Vue projects.
build_all_projects() {
  is_yarn_installed
  setup_angular_projects
  setup_react_projects
  setup_vue_projects
  success "All projects have been built."
}

build_all_projects
