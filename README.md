# **Interlinear Bible Simple Editor**

This is an _Interlinear Bible Simple Editor_ (**IBSE**) that's created for
easier translation of the Interlinear Bible format described
[here](https://github.com/benihyangbaik/aist/blob/main/README.en.md#cheap-to-compute).

## **Important Notices**

_For now the whole UI is in Indonesian, we haven't thought of an easy way
to have several language ready for the UI. Feel free to send suggestions
to our email provided below or simply open an issue._

_It is supposed to be a multiplatform and a web app, but because of the
change of the multiplatform wrapper framework, it is not available as a
web app for now._

## **Technology**

Because of the urgent need of this application, it is made to be simple
and portable. So the web technologies (SolidJS framework with Hope UI
component library for the functionality and interface and TypeScript for
easier debugging), Tauri as the wrapper for desktop use. The fonts used
are [SBL
Biblit](https://www.sbl-site.org/educational/BiblicalFonts_SBLBibLit.aspx).

## **Functionality**

Because of the urgent need of this application, so the functionality will
be added gradually.

_Phase I_ (**OK**)

1. Input the equivalent of every word of the original language.
2. Save and load the JSON file from certain directory.
3. Automatically save on every change made.

_Phase II_ (**OK**)

1. Modal/dialog that shows the lexicon entry.
2. Popup that shows the parsed morphological data.
3. Upload (push) and download (pull) the JSON file from certain Git
   repository.

_Phase III_

1. Display one chapter to translate.
2. Modifiable font size.
3. Verse references on the Strongs (dictionary) data.
4. History of the traveled verses or chapters
5. Mechanism to print the translated parts in a common digital book format
   such as PDF.

## **Usage**

We will release an installer for Windows and Linux in a couple of weeks!
Until then, feel free to contact us by the email provided below if you
require any assistance.

## **Development**

Run `pnpm tauri dev` after installing JavaScript and Rust dependencies,
change `pnpm` with `yarn` or `npm` if you prefer. Start modifying the
source, save them, and you'll see the application updated automatically.

## **Improvements**

List of things to be improved.

1. Add documentation as a comment for every function and components.

## **Contact**

Benih Yang Baik <[info@benihyangbaik.com](mailto:info@benihyangbaik.com)>
